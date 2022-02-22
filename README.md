## UIKittenTestApp


## How to run the app

Move into the app

```bash
$ cd <app>
```

Start metro server on one tab

```sh
react-native start --port=8082
```

OR

```sh
yarn start --port=8082 --reset-cache
```

*NB:* Make sure you have a device connected e.g. Android phone

To check:


   ```
   $ adb devices

   List of devices attached
   PY2MF5WQZCJ device         # Physical device
   ```

Open another tab and run app on Android phone

```sh
npx react-native run-android --port=8082
```