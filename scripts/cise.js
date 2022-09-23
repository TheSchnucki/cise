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

    dice3d.addSystem({id:"scrible",
      name:"⁂ Scrible (d6, special)"
    },false);

    dice3d.addDicePreset({
      type:"d6",
      labels:[
        'modules/cise/artwork/scrible/d6-1.webp',
        'modules/cise/artwork/scrible/d6-2.webp',
        'modules/cise/artwork/scrible/d6-3.webp',
        'modules/cise/artwork/scrible/d6-4.webp',
        'modules/cise/artwork/scrible/d6-5.webp',
        'modules/cise/artwork/scrible/d6-6.webp'
      ],
  	system:"scrible"
    });


    dice3d.addSystem({id:"cybercise",
      name:"⁂ CyberCise (d6, special)"
    },false);

    dice3d.addDicePreset({
      type:"d6",
      labels:[
        'modules/cise/artwork/cybercise/d6-1.webp',
        'modules/cise/artwork/cybercise/d6-2.webp',
        'modules/cise/artwork/cybercise/d6-3.webp',
        'modules/cise/artwork/cybercise/d6-4.webp',
        'modules/cise/artwork/cybercise/d6-5.webp',
        'modules/cise/artwork/cybercise/d6-6.webp'
      ],
      bumpMaps:[
        'modules/cise/artwork/cybercise/d6-1-bump.webp',
        'modules/cise/artwork/cybercise/d6-2-bump.webp',
        'modules/cise/artwork/cybercise/d6-3-bump.webp',
        'modules/cise/artwork/cybercise/d6-4-bump.webp',
        'modules/cise/artwork/cybercise/d6-5-bump.webp',
        'modules/cise/artwork/cybercise/d6-6-bump.webp'
    ],
    system:"cybercise"
    });


});
