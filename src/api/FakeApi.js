const FakeApi = () => {
  // const URL = process.env.REACT_APP_ROOT_URL;

  const loadInformation = async (placeId) => {
    console.log("placeId ", placeId);
    const apiURL = `https://jsonplaceholder.typicode.com/todos/1`;

    const res = await fetch(apiURL)
    if (!res.ok) {
      throw `something went wrrong by calling ${apiURL}`;
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

  return {
    loadInformation,
  };
};

export default FakeApi();
