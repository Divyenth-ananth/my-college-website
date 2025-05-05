const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);

// Enable collisions globally
scene.collisionsEnabled = true;

// Camera (First-Person)
const camera = new BABYLON.UniversalCamera("camera", new BABYLON.Vector3(5, 10, 5), scene);
camera.attachControl(canvas, true);
camera.inertia = 0;
camera.angularSensibility = 1000;
camera.checkCollisions = true;
camera.ellipsoid = new BABYLON.Vector3(1, 2, 1); // Define collision ellipsoid (width, height, depth)
camera.ellipsoidOffset = new BABYLON.Vector3(0, 2, 0); // Offset to align with camera's "head"

// Display camera position
let positionDisplay = document.getElementById("positionDisplay");
scene.onBeforeRenderObservable.add(() => {
    if (scene.activeCamera) {
        const pos = scene.activeCamera.position;
        positionDisplay.innerHTML = 
            `X: ${pos.x.toFixed(2)}<br>` +
            `Y: ${pos.y.toFixed(2)}<br>` +
            `Z: ${pos.z.toFixed(2)}`;
    }
});

// Pointer Lock
canvas.addEventListener('click', () => canvas.requestPointerLock());

// Lighting
const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

// Minimap
const minimapUI = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
const minimapContainer = new BABYLON.GUI.Rectangle("minimapContainer");
minimapContainer.width = "200px";
minimapContainer.height = "200px";
minimapContainer.cornerRadius = 10;
minimapContainer.color = "white";
minimapContainer.thickness = 2;
minimapContainer.background = "black";
minimapContainer.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
minimapContainer.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
minimapContainer.left = "10px";
minimapContainer.top = "-10px";
minimapUI.addControl(minimapContainer);
const playerDot = new BABYLON.GUI.Ellipse("playerDot");
playerDot.width = "10px";
playerDot.height = "10px";
playerDot.color = "white";
playerDot.thickness = 2;
playerDot.background = "blue";
minimapContainer.addControl(playerDot);

const triggerPoints = [
    new BABYLON.Vector3(-467.9, 10, -343.92),
    new BABYLON.Vector3(10, 10, 30),
    new BABYLON.Vector3(100, 10, -80),
    new BABYLON.Vector3(-200, 10, 150),
    new BABYLON.Vector3(60, 10, 200)
];

// Quiz Markers on Minimap
const quizMarkers = [];
triggerPoints.forEach((point, index) => {
    const marker = new BABYLON.GUI.Ellipse(`quizMarkerDot${index}`);
    marker.width = "6px";
    marker.height = "6px";
    marker.addClass = "quizMarker red"; // Initial red state
    // Map world coordinates to minimap
    const minimapX = ((point.x + 1000) / 2000) * 200;
    const minimapZ = ((point.z + 1000) / 2000) * 200;
    const clampedX = Math.max(3, Math.min(197, minimapX)); // Account for 6x6px size
    const clampedZ = Math.max(3, Math.min(197, minimapZ));
    marker.left = clampedX - 100;
    marker.top = -(clampedZ - 100); // Flip Z-axis
    minimapContainer.addControl(marker);
    quizMarkers.push(marker);
});

// Update player dot and quiz markers
scene.onBeforeRenderObservable.add(() => {
    if (scene.activeCamera) {
        const pos = scene.activeCamera.position;
        // Update player dot
        const minimapX = ((pos.x + 1000) / 2000) * 200;
        const minimapZ = ((pos.z + 1000) / 2000) * 200;
        const clampedX = Math.max(5, Math.min(195, minimapX));
        const clampedZ = Math.max(5, Math.min(195, minimapZ));
        playerDot.left = clampedX - 100;
        playerDot.top = -(clampedZ - 100);
        // Update quiz marker colors
        quizMarkers.forEach((marker, index) => {
            marker.addClass = quizCompleted[index] ? "quizMarker green" : "quizMarker red";
        });
    }
});

// Ground
const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 2000, height: 2000 }, scene);
ground.checkCollisions = true; // Enable collisions for the ground
const groundMat = new BABYLON.PBRMaterial("groundMat", scene);
groundMat.albedoTexture = new BABYLON.Texture("assets/textures/color.jpg", scene);
groundMat.bumpTexture = new BABYLON.Texture("assets/textures/Normal.jpg", scene);
groundMat.ambientTexture = new BABYLON.Texture("assets/textures/AO.jpg", scene);
groundMat.metallicTexture = new BABYLON.Texture("assets/textures/Roughness.jpg", scene);
groundMat.useRoughnessFromMetallicTextureAlpha = false;
groundMat.useRoughnessFromMetallicTextureGreen = true;
groundMat.displacementTexture = new BABYLON.Texture("assets/textures/Displacement.jpg", scene);
groundMat.useParallax = true;
groundMat.useParallaxOcclusion = true;
groundMat.parallaxScaleBias = 0.1;
groundMat.albedoTexture.uScale = 100;
groundMat.albedoTexture.vScale = 100;
groundMat.bumpTexture.uScale = 100;
groundMat.bumpTexture.vScale = 100;
groundMat.ambientTexture.uScale = 100;
groundMat.ambientTexture.vScale = 100;
groundMat.metallicTexture.uScale = 100;
groundMat.metallicTexture.vScale = 100;
groundMat.displacementTexture.uScale = 100;
groundMat.displacementTexture.vScale = 100;
ground.material = groundMat;

// Fences
let fenceHeight = 50;
let fenceThickness = 10;
let fenceSize = 2000;
let fenceMaterial = new BABYLON.StandardMaterial("fenceMaterial", scene);
fenceMaterial.diffuseColor = new BABYLON.Color3(0.6, 0.4, 0.2);

function createFence(x, z, width, rotationY) {
    let fence = BABYLON.MeshBuilder.CreateBox("fence", { 
        width: width, 
        height: fenceHeight, 
        depth: fenceThickness 
    }, scene);
    fence.position = new BABYLON.Vector3(x, fenceHeight / 2, z);
    fence.rotation.y = rotationY;
    fence.material = fenceMaterial;
    fence.checkCollisions = true; // Enable collisions for the fence
    return fence;
}

let fence1 = createFence(0, fenceSize / 2, fenceSize, 0);
let fence2 = createFence(0, -fenceSize / 2, fenceSize, 0);
let fence3 = createFence(fenceSize / 2, 0, fenceSize, Math.PI / 2);
let fence4 = createFence(-fenceSize / 2, 0, fenceSize, Math.PI / 2);

// Environment (Skybox, Trees, Buildings)
const environmentTexture = new BABYLON.HDRCubeTexture("assets/environment/sky1.hdr", scene, 512);
scene.environmentTexture = environmentTexture;
const skybox = scene.createDefaultSkybox(environmentTexture, true, 1000);

function scaleMesh(mesh, factor) {
    mesh.scaling = new BABYLON.Vector3(factor, factor, factor);
}

function loadEnvironment() {
    BABYLON.SceneLoader.ImportMesh("", "assets/environment/", "tree.glb", scene, (meshes) => {
        const treeMesh = meshes[0];
        meshes.forEach(mesh => {
            mesh.checkCollisions = true;
            mesh.refreshBoundingInfo(); // Ensure accurate collision boundaries
        });
        treeMesh.position = new BABYLON.Vector3(0, 0, 0);
        treeMesh.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);

        const blockedMeshes = scene.meshes.filter(mesh => mesh.metadata?.isBuilding);
        function isOverlappingBlocked(pos, treeSize, blockedMeshes) {
            const treeMin = pos.subtract(treeSize.scale(0.5));
            const treeMax = pos.add(treeSize.scale(0.5));
            for (const mesh of blockedMeshes) {
                const bbox = mesh.getBoundingInfo().boundingBox;
                const min = bbox.minimumWorld;
                const max = bbox.maximumWorld;
                const isIntersecting =
                    treeMin.x <= max.x && treeMax.x >= min.x &&
                    treeMin.y <= max.y && treeMax.y >= min.y &&
                    treeMin.z <= max.z && treeMax.z >= min.z;
                if (isIntersecting) return true;
            }
            return false;
        }
        const treeCount = 100;
        let placed = 0;
        let tries = 0;
        const maxTries = 200;
        const treeSize = new BABYLON.Vector3(5, 10, 5);
        while (placed < treeCount && tries < maxTries) {
            tries++;
            const pos = new BABYLON.Vector3(
                Math.random() * 1000 - 500,
                0,
                Math.random() * 1000 - 500
            );
            if (isOverlappingBlocked(pos, treeSize, blockedMeshes)) continue;
            const tree = treeMesh.clone("treeClone" + placed);
            tree.position = pos;
            tree.refreshBoundingInfo();
            placed++;
        }
    });

    BABYLON.SceneLoader.ImportMesh("", "assets/environment/", "LHC_final.glb", scene, (meshes) => {
        var LHC = meshes[0];
        meshes.forEach(mesh => {
            mesh.metadata = { isBuilding: true };
            mesh.checkCollisions = true;
            mesh.refreshBoundingInfo();
        });
        LHC.position = new BABYLON.Vector3(-163.7, 5, -2144);
        LHC.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
    });

    BABYLON.SceneLoader.ImportMesh("", "assets/environment/", "Road.glb", scene, (meshes) => {
        const roadRoot = meshes[0];
        roadRoot.position = new BABYLON.Vector3(0, 0.01, 0);
        roadRoot.scaling = new BABYLON.Vector3(0.05, 0.05, 0.05);
        meshes.forEach(mesh => {
            mesh.checkCollisions = true;
            mesh.refreshBoundingInfo();
        });
    });

    BABYLON.SceneLoader.ImportMesh("", "assets/environment/", "arcade_machine.glb", scene, (meshes) => {
        const original = meshes[0];
        meshes.forEach(mesh => {
            mesh.metadata = { isBuilding: true };
            mesh.checkCollisions = true;
            mesh.refreshBoundingInfo();
        });
        original.position = new BABYLON.Vector3(-430.7, 0, -183.1);
        original.name = "arcade_original";
        const clone1 = original.clone("arcade1");
        clone1.position = new BABYLON.Vector3(67.77, 0, -372.34);
        const clone2 = original.clone("arcade2");
        clone2.position = new BABYLON.Vector3(500.97, 0, -306.65);
    });

    BABYLON.SceneLoader.ImportMesh("", "assets/environment/", "AB1_final.glb", scene, (meshes) => {
        var AB1 = meshes[0];
        meshes.forEach(mesh => {
            mesh.metadata = { isBuilding: true };
            mesh.checkCollisions = true;
            mesh.refreshBoundingInfo();
        });
        AB1.position = new BABYLON.Vector3(1101, 0, -1865);
        AB1.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
        AB1.rotation.y = Math.PI;
    });

    BABYLON.SceneLoader.ImportMesh("", "assets/environment/", "adminblocklol.glb", scene, (meshes) => {
        var admin = meshes[0];
        meshes.forEach(mesh => {
            mesh.metadata = { isBuilding: true };
            mesh.checkCollisions = true;
            mesh.refreshBoundingInfo();
        });
        admin.position = new BABYLON.Vector3(57.21, 10, -518.7);
        admin.scaling = new BABYLON.Vector3(0.7, 0.7, 0.7);
        admin.rotation.y = Math.PI;
    });

    BABYLON.SceneLoader.ImportMesh("", "assets/environment/", "Cottage.glb", scene, (meshes) => {
        let cottage = meshes[0];
        meshes.forEach(mesh => {
            mesh.metadata = { isBuilding: true };
            mesh.checkCollisions = true;
            mesh.refreshBoundingInfo();
        });
        cottage.position = new BABYLON.Vector3(-208, 0, 98);
        cottage.scaling = new BABYLON.Vector3(0.05, 0.05, 0.05);
        cottage.rotation.y = BABYLON.Tools.ToRadians(180);
        let woodTexture = new BABYLON.StandardMaterial("woodMaterial", scene);
        woodTexture.diffuseTexture = new BABYLON.Texture("assets/textures/eco_texture.jpg", scene);
        meshes.forEach(mesh => {
            mesh.material = woodTexture;
        });
    });
}
loadEnvironment();

// Movement - Relative to Camera Direction (FPS-like)
let inputMap = {};
scene.actionManager = new BABYLON.ActionManager(scene);
scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, (evt) => {
    inputMap[evt.sourceEvent.key.toLowerCase()] = true;
}));
scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, (evt) => {
    inputMap[evt.sourceEvent.key.toLowerCase()] = false;
}));

scene.onBeforeRenderObservable.add(() => {
    let forward = camera.getDirection(BABYLON.Vector3.Forward());
    let right = camera.getDirection(BABYLON.Vector3.Right());

    let movement = BABYLON.Vector3.Zero();
    if (inputMap['w']) movement.addInPlace(forward);
    if (inputMap['s']) movement.subtractInPlace(forward);
    if (inputMap['a']) movement.subtractInPlace(right);
    if (inputMap['d']) movement.addInPlace(right);

    movement.y = 0;  // Stay on ground
    let speed = 1.5;
    if (inputMap['shift']) speed = 3;  // Sprint when holding Shift
    movement.normalize().scaleInPlace(speed);
    camera.position.addInPlace(movement);
});

// Quiz System
const questionSets = [
    [
        { 
            question: "Which gas is primarily responsible for the greenhouse effect?", 
            options: ["Oxygen", "Carbon dioxide"], 
            correctIndex: 1 
        },
        { 
            question: "Which of the following is a renewable source of energy?", 
            options: ["Solar power", "Coal"], 
            correctIndex: 0 
        },
        { 
            question: "What is the primary cause of acid rain?", 
            options: ["Sulfur dioxide emissions", "Carbon monoxide"], 
            correctIndex: 0 
        },
        { 
            question: "Smog is a combination of smoke and:", 
            options: ["Fog", "Dust"], 
            correctIndex: 0 
        },
        { 
            question: "Which gas released from air conditioners damages the ozone layer?", 
            options: ["CFCs", "Oxygen"], 
            correctIndex: 0 
        },
    ],
    [
        { 
            question: "Bioaccumulation refers to:", 
            options: ["Accumulation of toxins in organisms", "Increase in oxygen levels in water"], 
            correctIndex: 0 
        },
        { 
            question: "Which of the following is a biodegradable item?", 
            options: ["Plastic bag", "Banana peel"], 
            correctIndex: 1 
        },
        { 
            question: "Which is a more eco-friendly mode of transport?", 
            options: ["Bicycle", "Car"], 
            correctIndex: 0 
        },
        { 
            question: "Which type of bag is more environmentally friendly?", 
            options: ["Cloth bag", "Plastic bag"], 
            correctIndex: 0 
        },
        { 
            question: "Which gas causes the sharp smell near garbage dumps?", 
            options: ["Methane", "Helium"], 
            correctIndex: 0 
        },
    ],
    [
        { 
            question: "Which action helps reduce air pollution?", 
            options: ["Carpooling", "Driving alone daily"], 
            correctIndex: 0 
        },
        { 
            question: "Which of these is an effect of global warming?", 
            options: ["Melting glaciers", "Formation of coral reefs"], 
            correctIndex: 0 
        },
        { 
            question: "Ozone protects us from which type of radiation?", 
            options: ["Ultraviolet rays", "Infrared rays"], 
            correctIndex: 0 
        },
        { 
            question: "Which process converts waste into reusable material?", 
            options: ["Recycling", "Landfilling"], 
            correctIndex: 0 
        },
        { 
            question: "Which natural disaster is worsened by deforestation?", 
            options: ["Floods", "Earthquakes"], 
            correctIndex: 0 
        },
    ],
    [
        { 
            question: "Which of the following is a fossil fuel?", 
            options: ["Petroleum", "Biogas"], 
            correctIndex: 0 
        },
        { 
            question: "Which of these human activities causes soil pollution?", 
            options: ["Excessive use of pesticides", "Organic farming"], 
            correctIndex: 0 
        },
        { 
            question: "Which of these can reduce the urban heat island effect?", 
            options: ["Green roofs", "Asphalt roads"], 
            correctIndex: 0 
        },
        { 
            question: "Which of the following increases your carbon footprint?", 
            options: ["Driving a petrol car", "Walking to school"], 
            correctIndex: 0 
        },
        { 
            question: "Planting trees helps reduce carbon footprint by:", 
            options: ["Absorbing CO₂", "Releasing CO₂"], 
            correctIndex: 0 
        },
    ],
    [
        { 
            question: "Which of these is an effect of climate change?", 
            options: ["Rising sea levels", "Lower sunlight"], 
            correctIndex: 0 
        },
        { 
            question: "Which of the following is a natural carbon sink?", 
            options: ["Forest", "Factory"], 
            correctIndex: 0 
        },
        { 
            question: "Which human activity leads directly to desertification?", 
            options: ["Overgrazing", "Tree planting"], 
            correctIndex: 0 
        },
        { 
            question: "Which of these is an endangered species?", 
            options: ["Bengal tiger", "House cat"], 
            correctIndex: 0 
        },
        { 
            question: "Which ecosystem is rich in biodiversity?", 
            options: ["Rainforest", "Desert"], 
            correctIndex: 0 
        },
    ]
];

let currentQuestionIndex = 0;
let activeQuestions = [];
let currentQuizSetIndex = 0;
let score = 0;

function showQuizPopup(setIndex) {
    currentQuizSetIndex = setIndex;
    currentQuestionIndex = 0;
    activeQuestions = questionSets[setIndex];
    document.getElementById("quizFeedback").textContent = "";
    document.getElementById("closeQuiz").style.display = "none";
    loadQuestion();
    document.getElementById("quizPopup").style.display = "block";
}

function loadQuestion() {
    const q = activeQuestions[currentQuestionIndex];
    document.getElementById("quizQuestion").textContent = q.question;
    const optionsDiv = document.getElementById("quizOptions");
    optionsDiv.innerHTML = "";
    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.addEventListener("click", () => handleAnswer(index === q.correctIndex));
        optionsDiv.appendChild(btn);
    });
}

function handleAnswer(isCorrect) {
    const feedbackDiv = document.getElementById("quizFeedback");
    feedbackDiv.textContent = isCorrect ? "✅ Correct!" : "❌ Wrong!";
    if (isCorrect) {
        score += 10;
        document.getElementById("scoreValue").textContent = score;
    }
    setTimeout(() => {
        feedbackDiv.textContent = "";
        currentQuestionIndex++;
        if (currentQuestionIndex < activeQuestions.length) {
            loadQuestion();
        } else {
            document.getElementById("quizQuestion").textContent = "🎉 Quiz Completed!";
            document.getElementById("quizOptions").innerHTML = "";
            document.getElementById("closeQuiz").style.display = "block";
            quizCompleted[currentQuizSetIndex] = true;
            const markerMesh = scene.getMeshByName(`quizMarker${currentQuizSetIndex}`);
            if (markerMesh) {
                markerMesh.material.diffuseColor = new BABYLON.Color3(0, 1, 0);
                markerMesh.material.emissiveColor = new BABYLON.Color3(0, 1, 0);
            }
        }
    }, 1000);
}

function hideQuizPopup() {
    document.getElementById("quizPopup").style.display = "none";
    document.getElementById("quizFeedback").textContent = "";
}



let quizShownFlags = Array(triggerPoints.length).fill(false);
let quizCompleted = Array(triggerPoints.length).fill(false);

triggerPoints.forEach((point, index) => {
    let marker = BABYLON.MeshBuilder.CreateSphere(`quizMarker${index}`, { diameter: 2 }, scene);
    marker.position = point;
    let mat = new BABYLON.StandardMaterial(`quizMat${index}`, scene);
    mat.diffuseColor = new BABYLON.Color3(1, 0, 0);
    mat.emissiveColor = new BABYLON.Color3(1, 0, 0);
    marker.material = mat;
});

scene.onBeforeRenderObservable.add(() => {
    if (!scene.activeCamera) return;
    const cameraPos = scene.activeCamera.position;
    triggerPoints.forEach((point, index) => {
        const distance = BABYLON.Vector3.Distance(cameraPos, point);
        if (distance < 10) {
            if (!quizShownFlags[index] && !quizCompleted[index]) {
                quizShownFlags[index] = true;
                showQuizPopup(index);
            }
        } else {
            if (quizShownFlags[index]) {
                hideQuizPopup();
                quizShownFlags[index] = false;
            }
        }
    });
});

// Game Spheres
const spheres = [];
const sphere1 = BABYLON.MeshBuilder.CreateSphere("sphere1", {diameter: 1}, scene);
sphere1.position = new BABYLON.Vector3(-433.7, 5, -183.1);
sphere1.metadata = { gameUrl: "/games/game1.html", description: "Ecoverse" };
spheres.push(sphere1);

const sphere2 = BABYLON.MeshBuilder.CreateSphere("sphere2", {diameter: 1}, scene);
sphere2.position = new BABYLON.Vector3(64.77, 5, -372.34);
sphere2.metadata = { gameUrl: "/games/game2.html", description: "Space Adventure" };
spheres.push(sphere2);

const sphere3 = BABYLON.MeshBuilder.CreateSphere("sphere3", {diameter: 1}, scene);
sphere3.position = new BABYLON.Vector3(497.97, 5, -306.65);
sphere3.metadata = { gameUrl: "/games/game3.html", description: "night" };
spheres.push(sphere3);

function checkProximity() {
    let isNearAnySphere = false;
    spheres.forEach(sphere => {
        const distance = BABYLON.Vector3.Distance(camera.position, sphere.position);
        if (distance < 10) {
            isNearAnySphere = true;
            if (!document.getElementById('game-popup')) {
                showPopup(sphere.metadata.description, sphere.metadata.gameUrl);
            }
        }
    });
    if (!isNearAnySphere) {
        const existingPopup = document.getElementById('game-popup');
        if (existingPopup) {
            existingPopup.remove();
        }
    }
}

function showPopup(description, gameUrl) {
    const popup = document.createElement('div');
    popup.id = 'game-popup';
    popup.className = 'show';
    popup.innerHTML = `
        <p><strong>Wanna play a game?</strong></p>
        <p>${description}</p>
        <button id="yes-btn">Yes</button>
        <button id="no-btn">No</button>
    `;
    document.body.appendChild(popup);
    document.getElementById('yes-btn').onclick = () => {
        window.location.href = gameUrl;
    };
    document.getElementById('no-btn').onclick = () => {
        popup.remove();
    };
}

scene.onBeforeRenderObservable.add(checkProximity);

// Render Loop
engine.runRenderLoop(() => scene.render());
window.addEventListener('resize', () => engine.resize());