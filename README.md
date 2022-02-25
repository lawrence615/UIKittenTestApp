## UIKittenTestApp
Experimenting with UI Kitten framework while also increasing React Native knowledge.

The app uses a List to load dynamically generated data and allows user to load more when end of scroll is reached.

## How to run the app

Step 1. Clone app in your machine
```
$ git clone <git url>
```

Step 2. Move into the app

```bash
$ cd <app>
```

Step 3. Start metro server on one tab

```sh
react-native start --port=8082
```

OR

```sh
yarn start --port=8082 --reset-cache
```

Step 4. Open another tab and run app on Android phone

```sh
npx react-native run-android --port=8082
```

*NB:* To run the device, make sure you have a device connected e.g. Android phone

To confirm this:

   ```
   $ adb devices

   List of devices attached
   PY2MF5WQZCJ device         # Physical device
   ```