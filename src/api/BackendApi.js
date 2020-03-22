const BackendApi = () => {
  const URL = process.env.REACT_APP_ROOT_URL;

  const loadInformation = async (placeId) => {
    console.log("placeId ", placeId);
    const apiURL = `staging.`;

    const res = await fetch(apiURL)
    if (!res.ok) {
      throw `something went wrong by calling ${URL}`;
    };

    return {
      name: "24/7 Späti",
      address: "Schützenstr. 23",
      shop_images: ["ulr1", "ulr2", "ulr3"],
      verified: true,
      text: "some nice text",
      profile_image: "url",
    }
  }

  const loadAllMarker = async () => {
    await fetch("https://staging-api.kiez-retter.de/api/businesses/")
      .then(res => { return res.json() })
      .then(data => data.businesses )
      .catch((error) => {
        console.log(`something went wrong by calling ${URL}`);
      });
  }

  return {
    loadInformation,
    loadAllMarker,
  };
};

export default BackendApi();
