# rn-assignment7-11066506
## Project Overview

This project builds upon the last assignment design as seen in the UI mockup. It is a React Native application that includes several key components and functionalities to create a product browsing and shopping experience.

### Components Included
- **HomeScreen**: Displays a list of available products fetched from an external API.
- **ProductDetailScreen**: Displays detailed information about a selected product.
- **CartScreen**: Displays the items that have been added to the cart.
- **Drawer Component/Navigation Menu**: Accessible through a swipe gesture or button for easy navigation.
- **Add to Cart Button**: Allows users to add products to their cart.
- **Remove from Cart Button**: Allows users to remove items from their cart.

### Key Features
- **Data Fetching**: Fetch product data from an external API using `fetch` or `axios`.
- **Asynchronous Operations**: Managed using `async/await` or promises.
- **Local Storage**: Use Local Storage (AsyncStorage, SecureStore, or FileSystem) to store selected items locally on the device.
- **User Interactions**:
  - View a list of available products.
  - Preview detailed information about a product.
  - Add products to the cart.
  - Remove products from the cart.
  - View items in the cart.

## Installation Instructions

To set up and run this project locally, follow these steps:

1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/rn-assignment7-ID.git
   cd rn-assignment7-ID
Install Dependencies

sh
Copy code
npm install
Run the Application

sh
Copy code
npm start
Usage
HomeScreen: Displays a list of products fetched from an external API.
ProductDetailScreen: Tap on a product to view detailed information.
Add to Cart: Use the 'Add to Cart' button to add products to your cart.
CartScreen: View and manage items in your cart, with options to remove items.
Design Choices
Component-Based Architecture: Each screen is a separate component for modularity and reusability.
Navigation: Implemented a drawer navigation for ease of access to different screens.
State Management: Used local storage to persist cart items across sessions.
UI/UX: Followed the provided UI Design to ensure a consistent and user-friendly interface.

Screenshots

![Cart Screenshot]
(myapp/assets/cart.png)
![cart](https://github.com/user-attachments/assets/5e966160-d363-487d-9d71-1cc7683ffadf)


![Home Screenshot]
(myapp/assets/home.png)
![home](https://github.com/user-attachments/assets/e6c4c863-da06-46de-8d20-2b188704d087)


![Product Info Screenshot]
(myapp/assets/productInfo.png)
![productInfo](https://github.com/user-attachments/assets/411b800f-48a0-47ac-88ca-8b6fcbc112b2)


![Drawer Screenshot]
(myapp/assets/drawer.png)
![drawer](https://github.com/user-attachments/assets/4f961bfe-53ec-4125-9447-776b0dd4b32a)

