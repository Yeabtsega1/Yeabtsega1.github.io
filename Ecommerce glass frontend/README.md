# Lens Store

## An E-commerce Store For Glasses

#### - by Saurabh Kumar

## Demo

[Lens Store](https://lenstore.vercel.app/)
[Lens Store Backend](https://lenstore-backend.onrender.com/)

## Images

![Screenshot (155)](https://user-images.githubusercontent.com/68764149/165961489-897cd8da-6a27-4e98-9ce1-c12268537ae4.png)

![Screenshot (151)](https://user-images.githubusercontent.com/68764149/165961214-6f1bfa5c-cfd1-4ee6-a4dc-d3539576dd5a.png)

![Screenshot (153)](https://user-images.githubusercontent.com/68764149/165961241-8c696733-c7c9-49fd-ac9a-adc53a102bb0.png)

![Screenshot (154)](https://user-images.githubusercontent.com/68764149/165961649-e510678b-868e-4238-8441-66e4c829e33e.png)

![Screenshot (157)](https://user-images.githubusercontent.com/68764149/165961798-2e53c86e-8f5a-4c46-9adf-9bbf8f6fa987.png)

![Screenshot (156)](https://user-images.githubusercontent.com/68764149/165961292-9feaacf6-94c6-441b-bb46-0fa7708849b2.png)

## Features

-   User Authorization
    -   Sign In
    -   Sign Up
    -   Sign Out
-   Protected/Private Routes
-   Products Listing
-   Various Filters
-   Cart Management
-   Placing an Order
-   Razorpay support
-   User Account Page
-   Managing all Orders
-   Support Page (Under Contruction)

## Tech Stack

**Client:** React, React Router, Context, Tailwind

**Server:** Nodejs Express MongoDB Cloudinary SwaggerUI , RazorPay

[Backend](https://github.com/1SAURABHKUMAR1/Ecommerce-Backend)

## Run On Local Machine

Clone the project

```bash
git clone https://github.com/1SAURABHKUMAR1/Ecommerce.git
```

Go to the project directory

```bash
  cd Ecommerce
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

<br>

#### 👨‍💻 lets connect !

<br>

<a href="https://www.twitter.com/1SAURABHKUMAR1"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" width="93px"/></a>
<a href="https://www.linkedin.com/in/1saurabhkumar1/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" width="100px"/></a>

```
Ecommerce glass
├─ .git
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-e26d2d6cf1e45b2d825b5637688f56cc32326b19.idx
│  │     └─ pack-e26d2d6cf1e45b2d825b5637688f56cc32326b19.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .gitattributes
├─ .gitignore
├─ backend
│  ├─ controllers
│  │  └─ authController.js
│  ├─ index.js
│  ├─ models
│  │  └─ user.js
│  ├─ package-lock.json
│  ├─ package.json
│  └─ routes
│     └─ authRoutes.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ Components
│  │  ├─ AccountOrdersPage
│  │  │  ├─ OrderCard.jsx
│  │  │  └─ OrderItems.jsx
│  │  ├─ AccountPage
│  │  │  └─ SidePanel.jsx
│  │  ├─ CartPage
│  │  │  ├─ CartForm.jsx
│  │  │  ├─ CartProductCard
│  │  │  │  └─ CartProductCard.jsx
│  │  │  └─ PriceCard
│  │  │     └─ PriceCard.jsx
│  │  ├─ CheckoutPage
│  │  │  ├─ AddressForm
│  │  │  │  └─ AddressForm.jsx
│  │  │  ├─ CheckoutForm.jsx
│  │  │  ├─ OrderPriceSummary
│  │  │  │  └─ OrderPriceSummary.jsx
│  │  │  ├─ PaymentOptions
│  │  │  │  └─ PaymentOptions.jsx
│  │  │  ├─ ProductsForm
│  │  │  │  ├─ ProductCard.jsx
│  │  │  │  └─ ProductForm.jsx
│  │  │  └─ Wrapper
│  │  │     └─ CheckoutWrapper.jsx
│  │  ├─ ForgotPasswordPage
│  │  │  └─ ForgotPasswordForm.jsx
│  │  ├─ LandingPage
│  │  │  ├─ BestProduct
│  │  │  │  ├─ BestProductCard.jsx
│  │  │  │  └─ BestProducts.jsx
│  │  │  ├─ HeaderSection
│  │  │  │  ├─ CarouselCard.jsx
│  │  │  │  └─ HeaderSection.jsx
│  │  │  └─ RecommendedProduct
│  │  │     ├─ RecommendedCard.jsx
│  │  │     └─ RecommendedProduct.jsx
│  │  ├─ Layout
│  │  │  ├─ Footer
│  │  │  │  └─ Footer.jsx
│  │  │  └─ Header
│  │  │     ├─ Header.jsx
│  │  │     └─ HeaderBox
│  │  │        ├─ HeaderBoxDesktop.jsx
│  │  │        └─ HeaderBoxMobile.jsx
│  │  ├─ LoginPage
│  │  │  └─ LoginForm.jsx
│  │  ├─ ProductsPage
│  │  │  ├─ FilterSection
│  │  │  │  ├─ BrandFilter.jsx
│  │  │  │  ├─ CategoryFilter.jsx
│  │  │  │  ├─ FilteredSection.jsx
│  │  │  │  ├─ FilterWrapper.jsx
│  │  │  │  ├─ PriceBracketFilter.jsx
│  │  │  │  ├─ RatingsFilter.jsx
│  │  │  │  └─ SortFilter.jsx
│  │  │  └─ MainProductSection
│  │  │     ├─ MainProductSection.jsx
│  │  │     └─ ProductCard
│  │  │        └─ ProductCard.jsx
│  │  ├─ SignupPage
│  │  │  ├─ FormInputButton.module.css
│  │  │  └─ SignupForm.jsx
│  │  ├─ SingleProductPage
│  │  │  ├─ ProductDetail.jsx
│  │  │  ├─ ProductImage.jsx
│  │  │  └─ ProductNotFound.jsx
│  │  └─ UI
│  │     ├─ Button
│  │     │  └─ FormButton.jsx
│  │     ├─ InputField
│  │     │  ├─ PasswordField.jsx
│  │     │  └─ TextField.jsx
│  │     └─ Loader
│  │        ├─ Loader.css
│  │        ├─ LoaderButton.jsx
│  │        ├─ LoaderComponent.jsx
│  │        └─ LoaderMain
│  │           ├─ LoaderMain.css
│  │           └─ LoaderMain.jsx
│  ├─ Context
│  │  ├─ Auth
│  │  │  ├─ AuthProvider.jsx
│  │  │  └─ AuthReducer.jsx
│  │  ├─ Cart
│  │  │  ├─ CartProvider.jsx
│  │  │  └─ CartReducer.jsx
│  │  ├─ Checkout
│  │  │  ├─ CheckoutProvider.jsx
│  │  │  └─ CheckoutReducer.jsx
│  │  ├─ Filter
│  │  │  ├─ FilterProvider.jsx
│  │  │  └─ FilterReducer.jsx
│  │  ├─ MainProvider.jsx
│  │  ├─ Orders
│  │  │  └─ OrderProvider.jsx
│  │  └─ ProductList
│  │     ├─ ProductProvider.jsx
│  │     └─ ProductReducer.jsx
│  ├─ Data
│  │  ├─ Carousel
│  │  │  ├─ banner1.png
│  │  │  ├─ banner2.png
│  │  │  └─ banner3.png
│  │  ├─ Product
│  │  │  └─ product1.png
│  │  └─ Svg
│  │     ├─ forgotpassword.svg
│  │     ├─ googlepay.svg
│  │     ├─ login.svg
│  │     ├─ paypal.svg
│  │     ├─ razorpay.svg
│  │     ├─ signup.svg
│  │     └─ stripe.svg
│  ├─ Hooks
│  │  ├─ useLocalStorage.jsx
│  │  └─ useScrollToTop.jsx
│  ├─ index.css
│  ├─ index.js
│  ├─ models
│  │  └─ user.js
│  ├─ pages
│  │  ├─ AccountPage
│  │  │  └─ Account.jsx
│  │  ├─ CartPage
│  │  │  └─ Cart.jsx
│  │  ├─ CheckoutPage
│  │  │  └─ Checkout.jsx
│  │  ├─ ForgotPasswordPage
│  │  │  └─ ForgotPassword.jsx
│  │  ├─ LandingPage
│  │  │  └─ Landing.jsx
│  │  ├─ LoginPage
│  │  │  └─ Login.jsx
│  │  ├─ OrderPage
│  │  │  └─ Order.jsx
│  │  ├─ PageNotFound
│  │  │  └─ PageNotFound.jsx
│  │  ├─ ProductsPage
│  │  │  └─ Products.jsx
│  │  ├─ ProfilePage
│  │  │  └─ Profile.jsx
│  │  ├─ SignupPage
│  │  │  └─ Signup.jsx
│  │  ├─ SingleProductPage
│  │  │  └─ SingleProduct.jsx
│  │  └─ SupportPage
│  │     └─ Support.jsx
│  ├─ Toast
│  │  ├─ ErrorToast.js
│  │  └─ SuccessToast.js
│  └─ Utils
│     ├─ Axios.js
│     ├─ filterByBrands.js
│     ├─ filterByCategory.js
│     ├─ filterByPrice.js
│     ├─ filterByRating.js
│     ├─ finalFilteredData.js
│     ├─ index.js
│     └─ sortByPrice.js
└─ tailwind.config.js

```