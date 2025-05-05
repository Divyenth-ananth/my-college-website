const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);

// Camera (First-Person)
const camera = new BABYLON.UniversalCamera("camera", new BABYLON.Vector3(5, 10, 5), scene);
camera.attachControl(canvas, true);
camera.inertia = 0;
camera.angularSensibility = 1000;

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

//minimap
// Create advanced texture for the GUI
const minimapUI = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

// Container for minimap
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
// Dot representing the player
const playerDot = new BABYLON.GUI.Ellipse();
playerDot.width = "10px";
playerDot.height = "10px";
playerDot.color = "white";
playerDot.thickness = 2;
playerDot.background = "blue";
minimapContainer.addControl(playerDot);





// Infinite Ground
// const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 1000, height: 1000 }, scene);
// const groundMat = new BABYLON.StandardMaterial("groundMat", scene);
// const groundTex = new BABYLON.Texture("assets/textures/grass.jpg", scene);
// groundTex.uScale = 50;  // Repeat grass texture
// groundTex.vScale = 50;
// groundMat.diffuseTexture = groundTex;
// ground.material = groundMat;

let fenceHeight = 50;      // Adjust height of the fence
let fenceThickness = 10;   // Thickness of the fence
let fenceSize = 2000;      // Size of the square fence

// Create fence material
let fenceMaterial = new BABYLON.StandardMaterial("fenceMaterial", scene);
fenceMaterial.diffuseColor = new BABYLON.Color3(0.6, 0.4, 0.2); // Brownish color

// Function to create a fence segment
function createFence(x, z, width, rotationY) {
    let fence = BABYLON.MeshBuilder.CreateBox("fence", { 
        width: width, 
        height: fenceHeight, 
        depth: fenceThickness 
    }, scene);
    fence.position = new BABYLON.Vector3(x, fenceHeight / 2, z); // Center at ground level
    fence.rotation.y = rotationY; // Rotate if needed
    fence.material = fenceMaterial;
    return fence;
}

// Create four fence sides
let fence1 = createFence(0, fenceSize / 2, fenceSize, 0);            // Top
let fence2 = createFence(0, -fenceSize / 2, fenceSize, 0);           // Bottom
let fence3 = createFence(fenceSize / 2, 0, fenceSize, Math.PI / 2);  // Right
let fence4 = createFence(-fenceSize / 2, 0, fenceSize, Math.PI / 2); // Left



const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 2000, height: 2000 }, scene);
const groundMat = new BABYLON.PBRMaterial("groundMat", scene);

groundMat.albedoTexture = new BABYLON.Texture("assets/textures/color.jpg", scene);  // Color
groundMat.bumpTexture = new BABYLON.Texture("assets/textures/Normal.jpg", scene);  // Normal Map
groundMat.ambientTexture = new BABYLON.Texture("assets/textures/AO.jpg", scene);  // AO Map
groundMat.metallicTexture = new BABYLON.Texture("assets/textures/Roughness.jpg", scene);  // Roughness Map
groundMat.useRoughnessFromMetallicTextureAlpha = false;
groundMat.useRoughnessFromMetallicTextureGreen = true;

groundMat.displacementTexture = new BABYLON.Texture("assets/textures/Displacement.jpg", scene);  // Height Map
groundMat.useParallax = true;
groundMat.useParallaxOcclusion = true;
groundMat.parallaxScaleBias = 0.1;  // Adjust for subtle height

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


const environmentTexture = new BABYLON.HDRCubeTexture("assets/environment/sky1.hdr", scene, 512);
scene.environmentTexture = environmentTexture;

// Skybox (optional, depends if you want a physical skybox mesh)
const skybox = scene.createDefaultSkybox(environmentTexture, true, 1000);



// Scaling function
function scaleMesh(mesh, factor) {
    mesh.scaling = new BABYLON.Vector3(factor, factor, factor);
}

// NPC Data
const npcs = [
    {
        name: "Guide Bot",
        position: new BABYLON.Vector3(3, 0, 3),
        model: "npc1.glb",
        dialogue: [
            "Welcome to our world!",
            "Could you please talk to the Explorer nearby?"
        ],
        quest: { description: "Find and talk to Explorer", completed: false, target: "Explorer" }
    },
    {
        name: "Explorer",
        position: new BABYLON.Vector3(-5, 0, 6),
        model: "npc1.glb",
        dialogue: ["Thanks for finding me!", "Have you seen the tree nearby?"],
        quest: null
    }
];

// Current Quests
let currentQuests = [];
function updateQuestLog() {
    const log = document.getElementById('questLog');
    log.innerHTML = currentQuests.map(q => `${q.description} - ${q.completed ? '✅' : '❌'}`).join('<br>');
}

// Load NPCs
// npcs.forEach(npc => {
//     BABYLON.SceneLoader.ImportMesh("", "assets/characters/", npc.model, scene, (meshes) => {
//         npc.mesh = meshes[0];
//         npc.mesh.position = npc.position;
//         scaleMesh(npc.mesh,4);

//         scene.onBeforeRenderObservable.add(() => {
//             if (camera.position.subtract(npc.mesh.position).length() < 3) {
//                 showDialogue(npc);
//             }
//         });
//     });
// });

// Show Dialogue
function showDialogue(npc) {
    const box = document.getElementById('dialogueBox');
    box.innerText = npc.dialogue.join("\n");
    box.style.display = 'block';

    window.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'y') {
            startQuest(npc);
            box.style.display = 'none';
        } else if (e.key.toLowerCase() === 'n') {
            box.style.display = 'none';
        }
    }, {once: true});
}

// Start Quest
function startQuest(npc) {
    if (npc.quest && !npc.quest.completed) {
        currentQuests.push({...npc.quest});
        updateQuestLog();
    }
}

// Check Quest Completion
function checkQuestCompletion(npcName) {
    currentQuests.forEach(q => {
        if (q.target === npcName) {
            q.completed = true;
        }
    });
    updateQuestLog();
}

// Trees and Buildings
function loadEnvironment() {
    BABYLON.SceneLoader.ImportMesh("", "assets/environment/", "tree.glb", scene, (meshes) => {
        const treeMesh = meshes[0];  // Get the main tree mesh
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
        const treeCount = 80;
        let placed = 0;
        let tries = 0;
        const maxTries = 200;
        const treeSize = new BABYLON.Vector3(5, 10, 5); // rough size of the tree
        
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
            placed++;
        }
                
    
    });

    BABYLON.SceneLoader.ImportMesh("", "assets/environment/", "LHC_final.glb", scene, (meshes) => {
        var LHC = meshes[0];  // Reference to the loaded model
        meshes.forEach(mesh => {
            mesh.metadata = { isBuilding: true };
        });
        LHC.position = new BABYLON.Vector3(-186,0,-2294);
        LHC.scaling = new BABYLON.Vector3(0.7,0.7,0.7);
        // let woodTexture = new BABYLON.StandardMaterial("woodMaterial", scene);
        // woodTexture.diffuseTexture = new BABYLON.Texture("assets/textures/eco_texture.jpg", scene); 

        // // Apply the texture to all child meshes of the cottage
        // meshes.forEach(mesh => {
        // mesh.material = woodTexture;
        // });


        // let woodTexture = new BABYLON.StandardMaterial("woodMaterial", scene);
        // woodTexture.diffuseTexture = new BABYLON.Texture("assets/textures/eco_texture.jpg", scene); 

        // // Apply the texture to all child meshes of the cottage
        // meshes.forEach(mesh => {
        // mesh.material = woodTexture;
        // });

       
    });
    
    // BABYLON.SceneLoader.ImportMesh("", "assets/environment/", "Road.glb", scene, (meshes) => {
    //     const roadRoot = meshes[0]; // This is a transform node
    //     roadRoot.position = new BABYLON.Vector3(0, 0.01, 0); // Slightly above ground
    //     roadRoot.scaling = new BABYLON.Vector3(0.05, 0.05, 0.05); // Adjusted to fit scene
    
    //     // Ensure all child meshes are visible and correctly set
    //     // meshes.forEach(mesh => {
    //     //     mesh.isVisible = true;
    //     //     mesh.metadata = { isRoad: true }; // Optional tagging
    //     //     if (mesh.material) {
    //     //         mesh.material.alpha = 1;
    //     //         mesh.material.backFaceCulling = false;
    //     //     }
    //     // });
    
    // });

    // MATERIAL FOR ROADS
// MATERIAL FOR ROADS
const roadMaterial = new BABYLON.StandardMaterial("roadMat", scene);
roadMaterial.diffuseColor = new BABYLON.Color3(0.05, 0.05, 0.05); // asphalt look
roadMaterial.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);

// STRAIGHT ROAD SEGMENTS (larger size)
function createStraightRoad(start, length, direction = "z") {
    const width = 8;
    const road = BABYLON.MeshBuilder.CreateGround("road", {
        width: width,
        height: length,
    }, scene);

    road.material = roadMaterial;

    if (direction === "z") {
        road.position = new BABYLON.Vector3(start.x, 0.01, start.z + length / 2);
    } else if (direction === "x") {
        road.rotation.y = Math.PI / 2;
        road.position = new BABYLON.Vector3(start.x + length / 2, 0.01, start.z);
    }

    return road;
}

// CURVED ROAD SEGMENTS using extrusion
function createCurvedRoad(center, radius = 15, thickness = 8, startAngle = 0, endAngle = Math.PI / 2) {
    const points = [];

    const segments = 30; // More = smoother curve
    for (let i = 0; i <= segments; i++) {
        const angle = startAngle + (endAngle - startAngle) * (i / segments);
        const outerX = (radius + thickness / 2) * Math.cos(angle);
        const outerZ = (radius + thickness / 2) * Math.sin(angle);
        points.push(new BABYLON.Vector3(outerX, 0, outerZ));
    }
    for (let i = segments; i >= 0; i--) {
        const angle = startAngle + (endAngle - startAngle) * (i / segments);
        const innerX = (radius - thickness / 2) * Math.cos(angle);
        const innerZ = (radius - thickness / 2) * Math.sin(angle);
        points.push(new BABYLON.Vector3(innerX, 0, innerZ));
    }

    const shape = BABYLON.MeshBuilder.CreateRibbon("curveRoad", {
        pathArray: [points],
        closeArray: true,
        closePath: true,
    }, scene);

    shape.material = roadMaterial;
    shape.position = new BABYLON.Vector3(center.x, 0.01, center.z);
    return shape;
}

// === COMPOSE THE ROAD NETWORK ===
// Vertical road up
const road1 = createStraightRoad(new BABYLON.Vector3(0, 0, 0), 60, "z");

// Curve (L-shape turn)
const curve1 = createCurvedRoad(new BABYLON.Vector3(0, 0, 60), 15, 8, 0, Math.PI / 2);

// Horizontal road right
const road2 = createStraightRoad(new BABYLON.Vector3(0, 0, 60), 80, "x");

// Downward road from the end
const road3 = createStraightRoad(new BABYLON.Vector3(80, 0, 60), 40, "z");

    

    BABYLON.SceneLoader.ImportMesh("", "assets/environment/", "arcade_machine.glb", scene, (meshes) => {
        const original = meshes[0]; // Main arcade model
        meshes.forEach(mesh => {
            mesh.metadata = { isBuilding: true };
        });
        original.position = new BABYLON.Vector3(-439.31,0,33);
        original.name = "arcade_original";
    
        // Clone 1
        const clone1 = original.clone("arcade1");
        clone1.position = new BABYLON.Vector3(-439.31,0,74);
    
        // Clone 2
        const clone2 = original.clone("arcade2");
        clone2.position = new BABYLON.Vector3(-439.31,0,107);
    });
    
    

    BABYLON.SceneLoader.ImportMesh("", "assets/environment/", "AB1_final.glb", scene, (meshes) => {
        var AB1 = meshes[0];  // Reference to the loaded model
        meshes.forEach(mesh => {
            mesh.metadata = { isBuilding: true };
        });
        AB1.position = new BABYLON.Vector3(1001,0,-2260);
        AB1.scaling = new BABYLON.Vector3(0.7,0.7,0.7);
        AB1.rotation.y = Math.PI;
        // let woodTexture = new BABYLON.StandardMaterial("woodMaterial", scene);
        // woodTexture.diffuseTexture = new BABYLON.Texture("assets/textures/eco_texture.jpg", scene); 

        // // Apply the texture to all child meshes of the cottage
        // meshes.forEach(mesh => {
        // mesh.material = woodTexture;
        // });
    });

    BABYLON.SceneLoader.ImportMesh("", "assets/environment/", "adminblocklol.glb", scene, (meshes) => {
        var admin = meshes[0];  // Reference to the loaded model
        meshes.forEach(mesh => {
            mesh.metadata = { isBuilding: true };
        });
        admin.position = new BABYLON.Vector3(65.97,10,-654.03);
        admin.scaling = new BABYLON.Vector3(0.7,0.7,0.7);
        admin.rotation.y = Math.PI;
        // let woodTexture = new BABYLON.StandardMaterial("woodMaterial", scene);
        // woodTexture.diffuseTexture = new BABYLON.Texture("assets/textures/eco_texture.jpg", scene); 

        // // Apply the texture to all child meshes of the cottage
        // meshes.forEach(mesh => {
        // mesh.material = woodTexture;
        // });
    });


    BABYLON.SceneLoader.ImportMesh("", "assets/environment/", "Cottage.glb", scene, function (meshes) {
        let cottage = meshes[0]; // The main mesh of the cottage
        meshes.forEach(mesh => {
            mesh.metadata = { isBuilding: true };
        });
    
        // Position the cottage in the world
        cottage.position = new BABYLON.Vector3(-208, 0, 98);  // Adjust coordinates as needed
    
        // Scale the model if it's too big or small
        cottage.scaling = new BABYLON.Vector3(0.05, 0.05, 0.05);  // Adjust scale if needed
    
        // Rotate it to face a direction if required
        cottage.rotation.y = BABYLON.Tools.ToRadians(180);  // Rotate by 180 degrees

        let woodTexture = new BABYLON.StandardMaterial("woodMaterial", scene);
        woodTexture.diffuseTexture = new BABYLON.Texture("assets/textures/eco_texture.jpg", scene); 

        // Apply the texture to all child meshes of the cottage
        meshes.forEach(mesh => {
        mesh.material = woodTexture;
        });
    
        console.log("Cottage loaded successfully!");
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



const questionSets = [
    // Quiz sets (same as you provided)
    [
        { question: "What color is the sky on a clear day?", options: ["Blue", "Green"], correctIndex: 0 },
        { question: "Which animal barks?", options: ["Cat", "Dog"], correctIndex: 1 },
        { question: "What is 2 + 2?", options: ["3", "4"], correctIndex: 1 },
        { question: "Which fruit is yellow?", options: ["Banana", "Apple"], correctIndex: 0 },
        { question: "Sun rises in the?", options: ["East", "West"], correctIndex: 0 },
    ],
    [
        { question: "Which one is a web browser?", options: ["Chrome", "Excel"], correctIndex: 0 },
        { question: "How many legs does a spider have?", options: ["6", "8"], correctIndex: 1 },
        { question: "Which one is a vegetable?", options: ["Carrot", "Strawberry"], correctIndex: 0 },
        { question: "Which day comes after Friday?", options: ["Saturday", "Thursday"], correctIndex: 0 },
        { question: "What is H2O?", options: ["Water", "Salt"], correctIndex: 0 },
    ],
    [
        { question: "What is the capital of Japan?", options: ["Tokyo", "Seoul"], correctIndex: 0 },
        { question: "Which gas do plants breathe in?", options: ["Oxygen", "Carbon Dioxide"], correctIndex: 1 },
        { question: "Which shape has 3 sides?", options: ["Triangle", "Square"], correctIndex: 0 },
        { question: "What sound does a cow make?", options: ["Moo", "Meow"], correctIndex: 0 },
        { question: "How many hours in a day?", options: ["24", "12"], correctIndex: 0 },
    ],
    [
        { question: "Which is a planet?", options: ["Earth", "Pluto (old)", "Mars"], correctIndex: 2 },
        { question: "What do bees make?", options: ["Milk", "Honey"], correctIndex: 1 },
        { question: "Which sport uses a bat?", options: ["Football", "Cricket"], correctIndex: 1 },
        { question: "What is frozen water called?", options: ["Ice", "Steam"], correctIndex: 0 },
        { question: "What do you wear on your feet?", options: ["Shoes", "Hat"], correctIndex: 0 },
    ],
    [
        { question: "What’s 5 x 2?", options: ["10", "12"], correctIndex: 0 },
        { question: "Which is a bird?", options: ["Penguin", "Snake"], correctIndex: 0 },
        { question: "What do you write with?", options: ["Pen", "Fork"], correctIndex: 0 },
        { question: "What is the opposite of cold?", options: ["Hot", "Wet"], correctIndex: 0 },
        { question: "What color is grass?", options: ["Green", "Red"], correctIndex: 0 },
    ]
];

// Global variables
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

    // Optional: disable player movement if you have controls
    // controls.enabled = false;
}

function loadQuestion() {
    const q = activeQuestions[currentQuestionIndex];
    document.getElementById("quizQuestion").textContent = q.question;
    const optionsDiv = document.getElementById("quizOptions");
    optionsDiv.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.style.margin = "5px";
        btn.style.padding = "8px 16px";
        btn.style.borderRadius = "6px";
        btn.style.border = "1px solid #444";
        btn.style.background = "#eee";
        btn.style.cursor = "pointer";

        // Correct click binding
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

            // Mark quiz as completed and change marker color
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

const triggerPoints = [
    new BABYLON.Vector3(-467.9, 10, -343.92),
    new BABYLON.Vector3(10, 10, 30),
    new BABYLON.Vector3(100, 10, -80),
    new BABYLON.Vector3(-200, 10, 150),
    new BABYLON.Vector3(60, 10, 200)
];



let quizShownFlags = Array(triggerPoints.length).fill(false);
let quizCompleted = Array(triggerPoints.length).fill(false);


triggerPoints.forEach((point, index) => {
    let marker = BABYLON.MeshBuilder.CreateSphere(`quizMarker${index}`, { diameter: 2 }, scene);
    marker.position = point;

    let mat = new BABYLON.StandardMaterial(`quizMat${index}`, scene);
    mat.diffuseColor = new BABYLON.Color3(1, 0, 0);
    mat.emissiveColor = new BABYLON.Color3(1, 0, 0);
    marker.material = mat;

    scene.onBeforeRenderObservable.add(() => {
        if (!scene.activeCamera) return;
    
        const cameraPos = scene.activeCamera.position;
    
        triggerPoints.forEach((point, index) => {
            const distance = BABYLON.Vector3.Distance(cameraPos, point);
    
            // Only trigger quiz once if not completed
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
    
});




// Let's assume your camera is named 'camera'
const spheres = [];

// Create spheres
const sphere1 = BABYLON.MeshBuilder.CreateSphere("sphere1", {diameter: 1}, scene);
sphere1.position = new BABYLON.Vector3(-442.31,5,33);
sphere1.metadata = { gameUrl: "/games/game1.html", description: "Ecoverse" };
spheres.push(sphere1);

const sphere2 = BABYLON.MeshBuilder.CreateSphere("sphere2", {diameter: 1}, scene);
sphere2.position = new BABYLON.Vector3(-442.31,5,74);
sphere2.metadata = { gameUrl: "/games/game2.html", description: "Space Adventure" };
spheres.push(sphere2);

// Function to check proximity
function checkProximity() {
    spheres.forEach(sphere => {
        const distance = BABYLON.Vector3.Distance(camera.position, sphere.position);
        if (distance < 10) { // Increase distance threshold to 5
            if (!document.getElementById('game-popup')) { 
                showPopup(sphere.metadata.description, sphere.metadata.gameUrl);
            }
        }
    });
}

// Function to show popup
function showPopup(description, gameUrl) {
    const popup = document.createElement('div');
    popup.id = 'game-popup';
    popup.style.position = 'absolute';
    popup.style.top = '30%';
    popup.style.left = '35%';
    popup.style.padding = '20px';
    popup.style.backgroundColor = 'white';
    popup.style.border = '2px solid black';
    popup.style.zIndex = 999;
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

// Hook into the render loop properly
scene.onBeforeRenderObservable.add(checkProximity);

  



// Render Loop
engine.runRenderLoop(() => scene.render());
window.addEventListener('resize', () => engine.resize());
