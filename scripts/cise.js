Hooks.on('diceSoNiceReady', (dice3d) => {

    dice3d.addSystem({
        id: "scriblemotion",
        name: "⁂ Scriblemotion (d6, special)"
    }, false);

    dice3d.addDicePreset({
        type: "d6",
        labels: [
            'modules/cise/artwork/scriblemotion/d6-1.webp',
            'modules/cise/artwork/scriblemotion/d6-2.webp',
            'modules/cise/artwork/scriblemotion/d6-3.webp',
            'modules/cise/artwork/scriblemotion/d6-4.webp',
            'modules/cise/artwork/scriblemotion/d6-5.webp',
            'modules/cise/artwork/scriblemotion/d6-6.webp'
        ],
        system: "scriblemotion"
    });

    dice3d.addSystem({
        id: "cisepunk",
        name: "⁂ cisepunk (d6, special)"
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
