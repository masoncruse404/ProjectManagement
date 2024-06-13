import * as request from 'supertest';
 describe('POST /login', () => {
   it('should have the response', async () => {
    const baseURL = 'http://localhost:3770/v1';
    const apiRequest = request(baseURL);
    const data = await apiRequest.post("/authentication/login").send({"Admin_Username" : "mason", "Admin_Password" : "test"});
    expect(data.status).toBe(200);
    expect(data.body.data).toHaveProperty("accessToken")
   });
 });

