import './Villains.css'

const Villains = () => {
  const villains = [
    {
      name: "Thanos",
      color: "var(--villain-purple)",
      image: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/5894973/thanos.0.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100", // Add your image URL here
      stats: [
        { label: "Power", value: 100 },
        { label: "Intelligence", value: 90 },
        { label: "Durability", value: 95 },
        { label: "Combat", value: 85 }
      ]
    },
    {
      name: "Loki",
      color: "var(--villain-green)",
      image: "https://assets.vogue.in/photos/60f14be01cd7c4573a592a2e/1:1/w_1607,h_1607,c_limit/loki-finale-thoughts.jpeg", // Add your image URL here
      stats: [
        { label: "Magic", value: 90 },
        { label: "Intelligence", value: 85 },
        { label: "Speed", value: 80 },
        { label: "Deception", value: 95 }
      ]
    },
    {
      name: "Ultron",
      color: "var(--villain-red)",
      image: "https://wallpapercave.com/wp/wp1818435.jpg", // Add your image URL here
      stats: [
        { label: "Technology", value: 95 },
        { label: "Strength", value: 90 },
        { label: "Durability", value: 90 },
        { label: "AI", value: 100 }
      ]
    },
    {
      name: "Red Skull",
      color: "var(--villain-red)",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Hugo_Weaving_as_Red_Skull.jpg/200px-Hugo_Weaving_as_Red_Skull.jpg", // Add your image URL here
      stats: [
        { label: "Combat", value: 85 },
        { label: "Intelligence", value: 80 },
        { label: "Leadership", value: 90 },
        { label: "Strategy", value: 85 }
      ]
    },
    {
      name: "Green Goblin",
      color: "var(--villain-green)",
      image: "https://hips.hearstapps.com/hmg-prod/images/spider-man-no-way-home-green-goblin-1637228334.jpg?crop=0.867xw:0.925xh;0.0552xw,0.0750xh&resize=1200:*", // Add your image URL here
      stats: [
        { label: "Insanity", value: 95 },
        { label: "Strength", value: 80 },
        { label: "Speed", value: 75 },
        { label: "Technology", value: 85 }
      ]
    },
    {
      name: "Magneto",
      color: "var(--villain-purple)",
      image: "https://i.ytimg.com/vi/Ecg38Gm0zbY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA3aDYzwIfJfKxwG3OdfStbmHcrQA", // Add your image URL here
      stats: [
        { label: "Magnetism", value: 100 },
        { label: "Intelligence", value: 90 },
        { label: "Leadership", value: 85 },
        { label: "Combat", value: 80 }
      ]
    },
    {
      name: "Venom",
      color: "var(--villain-black)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMSJbUr3Lk0elziAEAhdt5aXX6YcucyKZmTXxepPq7UTh8QxedBUyI0lBAGgzLU8p6jsI&usqp=CAU", // Add your image URL here
      stats: [
        { label: "Strength", value: 95 },
        { label: "Durability", value: 90 },
        { label: "Speed", value: 85 },
        { label: "Symbiote", value: 100 }
      ]
    },
    {
      name: "Doctor Doom",
      color: "var(--villain-green)",
      image: "https://external-preview.redd.it/jynaRKL2o6eLzHqA335LLlMO5GbM6YuVOFBHVauKgZs.jpg?width=640&crop=smart&auto=webp&s=c83c0aeb461c91b85c6e16f0ccd53f6ea87646ac", // Add your image URL here
      stats: [
        { label: "Magic", value: 90 },
        { label: "Technology", value: 95 },
        { label: "Intelligence", value: 100 },
        { label: "Leadership", value: 90 }
      ]
    }
  ];

  return (
    <div className="villains-container">
      <div className="villains-grid">
        {villains.map((villain, index) => (
          <div className="villain-card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={villain.image} alt={villain.name} />
              </div>
              <div className="card-back" style={{ borderTop: `3px solid ${villain.color}` }}>
                <h2 style={{ color: villain.color }}>{villain.name}</h2>
                {villain.stats.map((stat, i) => (
                  <div className="power-meter" key={i}>
                    <div className="power-label">
                      <span>{stat.label}</span>
                      <span>{stat.value}%</span>
                    </div>
                    <div className="power-bar">
                      <div 
                        className="power-fill" 
                        style={{ 
                          '--fill-width': `${stat.value}%`, 
                          background: villain.color 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Villains;