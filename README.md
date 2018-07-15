**Note**: This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

**Note 2**: This was originally just to test / learn Material-ui. I think the project is broken and I stopped here, where the tutorial series continued with something that was broken on my end :( 

## Using [Material-UI](https://github.com/mui-org/material-ui)
- import components with `import <component> from '@material-ui/core/<component>`
    - OR do `import { comp1, comp2, ... } from '@material-ui/core';`
- import icons with `import { IconName } from '@material-ui/icons';`
    - Example: `import { Add } from '@material-ui/icons';`
    - Install package with [`npm install @material-ui/icons`](https://www.npmjs.com/package/@material-ui/icons)
- Start with tutorial here: https://www.youtube.com/watch?v=3jRVFPPncEA
- Sandbox online that can be used to easily make react apps: https://codesandbox.io/s/z38w6329m3

## Styling
- Material-UI likes to use JSS, which is basically creating styles in javascript, then injecting that into Components. To use this...
    1. `import { withStyles } from 'material-ui/core/styles'`
    1. create your styles object - `const styles = theme => ({ ... styles ... })`
    1. Inject styles into component using `withStyles`
        - `export default withStyles(styles)(ComponentName);`
    1. Use the styles in your app
        - `<Component className={styles.componentClassName} />`