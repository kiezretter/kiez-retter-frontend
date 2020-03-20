const BackendApi = () => {
  const URL = process.env.REACT_APP_ROOT_URL;

  const loadInformation = async (placeId) => {
    console.log("placeId ", placeId);
    const apiURL = `https://jsonplaceholder.typicode.com/todos/1`;

    const res = await fetch(apiURL)
    if (!res.ok) {
      throw `something went wrong by calling ${apiURL}`;
    };

    // return res.json();
    return {
      name: "Muster Shop",
      address: "Musterstr. 12345, Berlin",
      shop_images: ["ulr1", "ulr2", "ulr3"],
      verified: "true",
      text: "some nice text",
      profile_image: "url",
    }
  }

  const loadAllMarker = async () => {
    // TODO: set URL richtig;
    // const apiURL = `${URL}/allMarks`;
    // const res = await fetch(apiURL)
    // if (!res.ok) {
    //   throw `something went wrong by calling ${apiURL}`;
    // };

    // return res.json();
    return [
      {
        id: 1,
        title: 'Hello my darling',
        position: {
          lat: 52.50888,
          lng: 13.396647
        },
        info: "some nice informationen",
        place_id: "ChIJGYTmkKtRqEcRWx2mn3U_McE",
      }, {
      id: 2,
      title: 'Hello my darling2',
      position: {
        lat: 52.50840,
        lng: 13.396699
      },
      info: "some nice informationen",
      place_id: "ChIJGYTmkKtRqEcRWx2mn3U_McE",
    }]
  }

  return {
    loadInformation,
    loadAllMarker,
  };
};

export default BackendApi();
