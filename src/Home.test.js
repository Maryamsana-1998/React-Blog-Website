import useFetch from "./useFetch";

beforeEach(()=>{
    fetch.resetMocks();

});

it('testing useFetch Hook', async ()=>{
     
    fetch.mockResponseOnce(JSON.stringify({blogs : {title : 'Opening Party!'}}))

    const {data: blogs,isPending,error } = await useFetch('http://localhost:8000/blogs');

    expect(blogs).toBe('Opening Party!');


})