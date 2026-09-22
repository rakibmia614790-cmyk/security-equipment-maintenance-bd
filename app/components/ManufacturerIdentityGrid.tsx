const manufacturers = [
  ["Rapiscan Systems", "Baggage & Parcel Inspection Technology"],
  ["NUCTECH", "Security Inspection Technology"],
  ["Smiths Detection", "Advanced Security Screening Technology"],
  ["Analogic", "X-Ray & CT Imaging Technology"],
  ["Astrophysics", "X-Ray Security Inspection Systems"],
  ["Gilardoni", "X-Ray Inspection Technology"],
  ["XRC", "X-Ray Security Screening Systems"],
  ["Scanna MSC", "Security X-Ray Inspection"],
  ["L3Harris", "Advanced Detection Technology"],
  ["BMI", "Security Screening Technology"],
];

export default function ManufacturerIdentityGrid() {
  return (
    <div className="manufacturer-identity-grid">
      {manufacturers.map(([name, description]) => (
        <article className="manufacturer-card" key={name}>
          <div className="manufacturer-card-grid" aria-hidden="true" />
          <div className="manufacturer-card-label">MANUFACTURER</div>
          <div className="manufacturer-card-name">{name}</div>
          <div className="manufacturer-card-sub">{description}</div>
          <div className="manufacturer-card-tech">
            X-RAY • SECURITY SCREENING • BAGGAGE INSPECTION
          </div>
        </article>
      ))}
    </div>
  );
}
