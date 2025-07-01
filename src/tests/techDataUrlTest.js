import techData from '../services/techData.js';

async function testUrls(data) {
    const entries = Object.entries(data);

    for (const [techName, { url }] of entries) {
        try {
            const response = await fetch(url, { method: 'HEAD' });
            if (response.ok) {
                console.log(`[✅] ${techName}: ${url} is reachable.`);
            } else {
                console.log(`[❌] ${techName}: ${url} returned status ${response.status}.`);
            }
        } catch (error) {
            console.log(`[❌] ${techName}: ${url} is NOT reachable. Error: ${error.message}`);
        }
    }
}

testUrls(techData);
