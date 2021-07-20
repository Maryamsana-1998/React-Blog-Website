import dataFetch from "./dataFetch";

beforeEach(() => {
    fetch.resetMocks();
  });
  
  it("tests fetch", async () => {
    fetch.mockResponseOnce(JSON.stringify({ blogs: { title: 'Skardu' } }));
  
    const data = await dataFetch('http://localhost:8000/blogs/');
    
    expect(data.blogs.title).toEqual('Skardu');
    expect(fetch).toHaveBeenCalledTimes(1);
   
  });
  