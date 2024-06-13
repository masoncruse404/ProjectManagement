// - /src/projects/spec/project-add.api.spec.ts - new project validation

import * as request from 'supertest';
 describe('POST /notes-add', () => {
   it('should have the response', async () => {
    const baseURL = 'http://localhost:3770/v1';
    const apiRequest = request(baseURL);
    const data = await apiRequest.post("/authentication/login").send({"Admin_Username" : "mason", "Admin_Password" : "test"});
    const token = data.body.data.accessToken
    
    const postData = {
            "Project_Name": "Project Name",
            "Project_Desc": "project desc",
            "Client_ID": 23,
            "Start_Date": "2024-03-23T17:40:12.814Z",
            "End_Date": "2024-03-23T17:40:12.819Z",
            "Estimated_Time_Hours": 7,
            "Actual_Time_Hours": 7,
            "Cost_Per_Hour": 7,
            "Total_Cost": 7,
            "Project_Status_ID": 2,
            "IT_Contact_ID": "1,2,3",
            "Project_Type_ID": 2,
            "ERP_Type_ID": 8,
            "Percentage_Complete": 100,
            "Supplier_ID": 2,
            "ERP_Contacts": "erp@email.com",
            "Client_Contacts": "client@email.com",
            "Supplier_Contacts": "supplier@email.com"
    }


    const response = await apiRequest.post('/project/add').set({"Authorization" : `Bearer ${token}`}).send(postData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
   });
 });

