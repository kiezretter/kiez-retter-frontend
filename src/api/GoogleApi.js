const GoogleApi = () => {
  const GOOGLEURL = process.env.REACT_APP_GOOGLE_URL;

  const loadDetails = async (placeId) => {
    console.log("placeId ", placeId);
    const apiURL = `${GOOGLEURL}?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&place_id=${placeId}`;
    const res = await fetch(apiURL, { method: "GET", mode: "no-cors", headers: { "Content-Type": "application/json"} });
    console.log("res ", res);
    // TODO: Die Url kann noch nicht aufgelöst werden, keine Ahnung warum.
    if (!res.ok) {
      throw `something went wrong by calling details from ${placeId}`;
    };

    return res.json();
  }

  return {
    loadDetails,
  };
};

export default GoogleApi();
