export default function House() {
  const house = {
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 2000,
    address: {
      street: "9 Elmore Street",
      city: "Boston",
      state: "Massachusetts",
      zip: "02119",
      country: "USA",
    },
    owners: ["Brett Wilkinson"],
  };

  return (
    <div id='wd-house'>
      <h4>House</h4>
      <h5>bedrooms</h5>
      {house.bedrooms}
      <h5>bathrooms</h5>
      {house.bathrooms}
      <h5>Data</h5>
      <pre>{JSON.stringify(house, null, 2)}</pre>
      <hr />
    </div>
  );
}
