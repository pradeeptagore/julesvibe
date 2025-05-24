console.log("Hello World");

function generateSineWave(amplitude, frequency, length) {
  const wave = [];
  for (let x = 0; x < length; x++) {
    const y = amplitude * Math.sin(frequency * x * 2 * Math.PI / length);
    wave.push(y);
  }
  return wave;
}

const exampleWave = generateSineWave(1, 1, 10);
console.log("Generated Sine Wave (first 5 points):");
console.log(exampleWave.slice(0, 5));

// Simple tests for generateSineWave
console.log("\nRunning tests for generateSineWave...");

// Test 1: Check output length
const testWave1 = generateSineWave(1, 1, 10);
console.assert(testWave1.length === 10, "Test 1 Failed: Length should be 10");

// Test 2: Check first point (should be 0 for frequency >= 1)
// amplitude * Math.sin(frequency * 0 * 2 * Math.PI / length) = amplitude * Math.sin(0) = 0
const testWave2 = generateSineWave(2, 1, 20);
console.assert(testWave2[0] === 0, "Test 2 Failed: First point should be 0");

// Test 3: Check a specific value (e.g., quarter period for sin(pi/2)=1)
// For x = length / (4 * frequency), the value should be amplitude * Math.sin(Math.PI / 2) = amplitude
const testWave3 = generateSineWave(3, 1, 40); // length = 40, frequency = 1
// x = 40 / (4 * 1) = 10
// We need to be careful with floating point comparisons.
const expectedValue3 = 3; // amplitude
const actualValue3 = testWave3[10];
console.assert(Math.abs(actualValue3 - expectedValue3) < 0.00001, `Test 3 Failed: Value at quarter period should be close to amplitude. Expected ${expectedValue3}, got ${actualValue3}`);

// Test 4: Zero amplitude
const testWave4 = generateSineWave(0, 1, 10);
let allZero = true;
for (let i = 0; i < testWave4.length; i++) {
  if (testWave4[i] !== 0) {
    allZero = false;
    break;
  }
}
console.assert(allZero, "Test 4 Failed: All points should be 0 for zero amplitude");

// Test 5: Zero frequency (should result in all zeros as sin(0)=0)
const testWave5 = generateSineWave(5, 0, 10);
let allZeroFreq = true;
for (let i = 0; i < testWave5.length; i++) {
  if (testWave5[i] !== 0) {
    allZeroFreq = false;
    break;
  }
}
console.assert(allZeroFreq, "Test 5 Failed: All points should be 0 for zero frequency");


console.log("Tests complete. Check console for any assertion failures.");
