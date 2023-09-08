### Front-end Engineer Task: Product Management System Enhancement
**Objective:** Enhance an existing Product Management System (PMS) to allow users to add, edit, and manage product listings seamlessly. We're expecting a mobile-first, responsive design, with a polished user experience and optimized performance.

#### 1. Initial Setup:
A boilerplate has been provided which is pre-configured with Next.js, Flow, and a GraphQL server. The home page with the list of products is already set up. Your task is to build upon this.

#### 2. Define Routes and Data Structure:
**Products should consist of:** ID, name, a brief description, price, and category.
**Implement two new routes:**
- "/create" - for adding new products.
- "/edit/:id" - for editing existing products.

#### 3. UI Enhancement with Material-UI:
**Homepage:**
Integrate a feature on each product card that allows users to open the edit form directly from the home page.

**Product Creation Form:**
Craft a form to allow users to add new products.
Ensure the form is intuitive, featuring fields for all product attributes and error handling for incorrect or missing inputs.

**Product Edit Form:**
Implement a form enabling users to edit an existing product's details. This form should pre-populate with the product's current details.
Make sure the form is intuitive, with fields for all product attributes and error handling.

#### 4. Enhance Data Management using React-Relay and GraphQL:
**Design GraphQL mutations and queries to:**
- Add a new product.
- Update an existing product using its ID.
Utilize React Relay to manage data, ensuring efficient communication between the GraphQL server and React components, especially for the mutations you implement.

#### 5. Prioritize Responsive Design:
Ensure a mobile-first approach and that components adapt elegantly to desktop sizes. Test your solution across varied devices: iPhone 13, iPad Air, MacBook 13”, and iMac 27”.

Wishing you success!
