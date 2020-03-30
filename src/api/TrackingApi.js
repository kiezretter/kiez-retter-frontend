const TrackingApi = () => {
  const sendTracking = async (business_id, action) => {
    const data = {
        business_id,
        action,
    };
  
    let response;
  
    try {
        response = await fetch(`${process.env.REACT_APP_ROOT_URL}/api/trackings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
  
        if (response.ok) {
            console.log('Success');
        } else {
            console.error(`HTTP-Error: ${response.status}`);
        }
    } catch(e) {
        console.error(`HTTP-Error (2): ${response.status}`);
    }
  }

  const sendDonation = async (business_id, amount_cents) => {
    const data = {
        business_id,
        amount_cents,
    };

    let response;

    try {
        response = await fetch(`${process.env.REACT_APP_ROOT_URL}/api/donations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            console.log('Danke fürs Spenden!')
        } else {
            console.error(`HTTP-Error: ${response.status}`);
        }
    } catch(e) {
        console.error(`HTTP-Error (2): ${response.status}`);
    }
}

  return { sendTracking, sendDonation };
}

export default TrackingApi();