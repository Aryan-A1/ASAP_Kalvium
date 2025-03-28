import './Avengers.css'

const Avengers = () => {
  const avengers = [
    {
      name: "Doctor Strange",
      color: "var(--doctor-strange)",
      image: "https://i.insider.com/6262ff239f65660019064d73?width=800&format=jpeg&auto=webp",
      stats: [
        { label: "Magic", value: 95 },
        { label: "Intelligence", value: 80 },
        { label: "Speed", value: 80 },
        { label: "Strength", value: 70 }
      ]
    },
    {
      name: "Shang-Chi",
      color: "var(--shang-chi)",
      image: "https://a.ltrbxd.com/resized/sm/upload/g3/ha/ra/bu/shang-chi-1200-1200-675-675-crop-000000.jpg?v=813ec0e7aa",
      stats: [
        { label: "Martial Arts", value: 100 },
        { label: "Strength", value: 85 },
        { label: "Speed", value: 70 },
        { label: "Intelligence", value: 60 }
      ]
    },
    {
      name: "Iron Man",
      color: "var(--iron-man)",
      image: "https://de9o6n2ujz7l.cloudfront.net/cache/bb/29/bb29887dfe5f7dce75c9ad9d6190e1dc.jpg",
      stats: [
        { label: "Technology", value: 90 },
        { label: "Strength", value: 90 },
        { label: "Speed", value: 80 },
        { label: "Endurance", value: 80 }
      ]
    },
    {
      name: "Black Panther",
      color: "var(--black-widow)",
      image: "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/10262121/boseman.jpg?quality=90&strip=all&crop=0,0,100,100",
      stats: [
        { label: "Will Power", value: 90 },
        { label: "Strength", value: 85 },
        { label: "Speed", value: 85 },
        { label: "Intelligence", value: 70 }
      ]
    },
    {
      name: "Black Widow",
      color: "var(--black-widow)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRGUYF3QR-t0WRUipmhe_Yi2jZAl9oZmoRQ&s",
      stats: [
        { label: "Combat", value: 90 },
        { label: "Strength", value: 60 },
        { label: "Speed", value: 70 },
        { label: "Intelligence", value: 75 }
      ]
    },
    {
      name: "Captain America",
      color: "var(--captain-america)",
      image: "https://akns-images.eonline.com/eol_images/Entire_Site/2013924/rs_1024x759-131024111419-1024.captain-america-2.jpg",
      stats: [
        { label: "Will Power", value: 100 },
        { label: "Strength", value: 90 },
        { label: "Speed", value: 75 },
        { label: "Intelligence", value: 75 }
      ]
    },
    {
      name: "Hulk",
      color: "var(--hulk)",
      image: "https://www.looper.com/img/gallery/every-hulk-movie-ranked-from-worst-to-best/intro-1555712816.jpg",
      stats: [
        { label: "Smash", value: 100 },
        { label: "Strength", value: 90 },
        { label: "Speed", value: 50 },
        { label: "Intelligence", value: 30 }
      ]
    },
    {
      name: "Thor",
      color: "var(--thor)",
      image: "https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg",
      stats: [
        { label: "Thunder", value: 100 },
        { label: "Strength", value: 99 },
        { label: "Speed", value: 90 },
        { label: "Intelligence", value: 70 }
      ]
    }
  ];

  return (
    <div className="avengers-container">
      <div className="avengers-grid">
        {avengers.map((avenger, index) => (
          <div className="avenger-card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={avenger.image} alt={avenger.name} />
              </div>
              <div className="card-back" style={{ borderTop: `3px solid ${avenger.color}` }}>
                <h2 style={{ color: avenger.color }}>{avenger.name}</h2>
                {avenger.stats.map((stat, i) => (
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
                          background: avenger.color 
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

export default Avengers;