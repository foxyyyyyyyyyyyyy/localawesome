# Localawesome: Your Local Font Awesome Icon Component for React

`localawesome` is a simple and flexible React component that allows you to easily render Font Awesome icons in your projects while giving you full control over the CSS URL. This is particularly useful if you are using Font Awesome Pro and want to host the CSS files locally or use a custom CDN.

## Features

*   **Easy Icon Rendering:**  Render Font Awesome icons with a simple `<Icon>` component.
*   **Configurable CSS URL:**  Specify the Font Awesome CSS URL using a `<FontAwesomeProvider>` component, allowing you to use your own custom CDN or locally hosted files.
*   **Font Awesome Styling Props:** Supports all of Font Awesome's built-in styling options, such as `size`, `spin`, `pulse`, `flip`, `rotate`, and more.
*   **TypeScript Ready:**  Fully typed with TypeScript for a smooth development experience.
*   **Bun Compatible:** Works seamlessly with Bun as your package manager and bundler.

## Installation

```bash
pnpm add localawesome
```

## Usage

1.  **Wrap Your App with `FontAwesomeProvider`:**

    In your application's entry point (e.g., `App.js` or `index.js`), wrap your app with the `<FontAwesomeProvider>` component and specify the `defaultCssUrl` prop with the URL to your Font Awesome CSS file:

    ```jsx
    import React from 'react';
    import { FontAwesomeProvider } from 'localawesome';
    import MyComponent from './MyComponent';

    function App() {
      return (
        <FontAwesomeProvider defaultCssUrl="https://your-custom-cdn.com/fontawesome/css/all.css">
          <MyComponent />
        </FontAwesomeProvider>
      );
    }

    export default App;
    ```

2.  **Use the `<Icon>` Component:**

    In any component where you want to render a Font Awesome icon, import the `<Icon>` component and use it like this:

    ```jsx
    import React from 'react';
    import { Icon } from 'localawesome';

    function MyComponent() {
      return (
        <div>
          <Icon iconName="coffee" size="2x" />
          <Icon iconName="check-square" iconType="solid" color="green" />
          <Icon iconName="github" iconType="brands" size="3x" />
          <Icon iconName="heart" iconType="regular" spin />
        </div>
      );
    }

    export default MyComponent;
    ```

## Props

### `<Icon>` Component

| Prop        | Type                                                                  | Default | Description                                                                                                                                                                                 |
| ----------- | --------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `iconName`  | `string`                                                              |         | **Required.** The name of the Font Awesome icon (e.g., `"coffee"`, `"check-square"`, `"heart"`).                                                                                           |
| `iconType`  | `"solid"` \| `"regular"` \| `"light"` \| `"brands"`                    | `"solid"` | The style of the icon. Use `"solid"` for Font Awesome Solid, `"regular"` for Regular, `"light"` for Light, and `"brands"` for Brands.                                                     |
| `size`      | `"xs"` \| `"sm"` \| `"lg"` \| `"1x"` \| `"2x"` \| ... \| `"10x"`     |         | The size of the icon.  See the Font Awesome documentation for available sizes.                                                                                                             |
| `spin`  | `boolean`                                                              |         | Adds spin animation to the icon. Use spin=true.        |
| `flip`  | `horizontal` \| `vertical` \| `both`                                                           |         | Flips an icon    |
