### Files Structure

```
src/
    assets/
    components/
        CustomComponent.jsx
    helpers/
        utilities.js
    i18n/
        es.json
    redux/
        common/
        actions/
        reducers/
    service/
        callServices.js
    utils/
        manifiest.json
    views/
        SectionName/
            Home.jsx
            _home.scss
```

**Note:** The name of the Root Component section should be equals as folderName e.x SectionName = Home and component = Home.jsx

### Practices to adopt

-   Split into folders outside the src according to responsibility

#### React Hooks

-   https://reactjs.org/docs/hooks-intro.html

#### css-bliss

-   https://github.com/gilbox/css-bliss

-   http://gilbox.github.io/css-bliss/walkthrough/release/

#### Single Responsibility Principle - One reason to change

-   https://blog.bitsrc.io/tiny-components-what-can-go-wrong-d6aa42d71370

-   https://blog.usejournal.com/how-to-apply-solid-principles-in-react-applications-6c964091a982

#### Pwa

-   [Generator service worker](https://webpack.js.org/guides/progressive-web-application/)
-   [Generator Manifest](https://www.simicart.com/manifest-generator.html/)

