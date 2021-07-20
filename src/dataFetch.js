 async function dataFetch(url) {

    try {

        const response = await fetch(url);
        const json = await response.json();
        //console.log(json)
        return json;
        
    }
    catch (err) {
        console.log(err)
        return null;
    }

}
export default dataFetch;


