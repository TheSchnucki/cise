Hooks.on('diceSoNiceReady', (dice3d) => {

    dice3d.addSystem({
        id: "scriblemotions",
        name: "⁂ Scriblemotions (d6, special)"
    }, false);

    dice3d.addDicePreset({
        type: "d6",
        labels: [
            'modules/cise/artwork/scriblemotions/d6-1.webp',
            'modules/cise/artwork/scriblemotions/d6-2.webp',
            'modules/cise/artwork/scriblemotions/d6-3.webp',
            'modules/cise/artwork/scriblemotions/d6-4.webp',
            'modules/cise/artwork/scriblemotions/d6-5.webp',
            'modules/cise/artwork/scriblemotions/d6-6.webp'
        ],
        system: "scriblemotions"
    });

    dice3d.addSystem({
        id: "cisepunk",
        name: "CisePunk (d6)"
    }, false);

    dice3d.addDicePreset({
        type: "d6",
        labels: [
            'modules/cise/artwork/cisepunk/d6-1.webp',
            'modules/cise/artwork/cisepunk/d6-2.webp',
            'modules/cise/artwork/cisepunk/d6-3.webp',
            'modules/cise/artwork/cisepunk/d6-4.webp',
            'modules/cise/artwork/cisepunk/d6-5.webp',
            'modules/cise/artwork/cisepunk/d6-6.webp'
        ],
        system: "cisepunk"
    });
});
