
// Environment variable
const env = "DR"; // Possible values "PROD" and "DR"

// Configuration variables


// Write your switch case here.
switch (env) {
    case 'STAGING':
        horizontalScale = false;
        multiZone = false;

        break;

    case 'PROD':
        horizontalScale = true;
        multiZone = false;

        break;

    case 'DR':
        horizontalScale = false;
        multiZone = true;

        break;
}

console.log(`The environment ${env} is detected.`);
console.log(`This is the recommended configurations:`);
console.log(`Horizontal Scale: ${horizontalScale}`);
console.log(`Multiple Location: ${multiZone}`);
