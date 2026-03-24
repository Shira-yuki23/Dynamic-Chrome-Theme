# 🌌 Dynamic Autumn Chrome New Tab

A cozy, aesthetic Chrome extension that transforms your new tab into a rotating autumn-themed experience 🍁
Every time you open a new tab, a different background appears — giving a calm, seasonal vibe while you browse.

---

## ✨ Features

* 🔄 **Dynamic Background Switching**
  Randomly changes between multiple autumn images on every new tab

* 🍁 **Aesthetic Autumn Theme**
  Warm, cozy visuals inspired by fall colors

* ⚡ **Lightweight & Fast**
  No external dependencies, runs instantly

* 🎯 **Simple Customization**
  Easily replace images with your own collection

---

## 📁 Project Structure

```
autumn-dynamic/
│── manifest.json        # Extension configuration
│── newtab.html          # Custom new tab page
│── script.js            # Logic for random image switching
│── bg1.jpg              # Background image 1
│── bg2.jpg              # Background image 2
```

---

## ⚙️ Installation (Manual)

1. Open Chrome and go to:

   ```
   chrome://extensions/
   ```
2. Enable **Developer Mode** (top right)
3. Click **Load unpacked**
4. Select the project folder (`autumn-dynamic`)

---

## 🚀 How It Works

* The extension overrides Chrome’s default new tab page
* A JavaScript file randomly selects an image
* The selected image is applied as the background

---

## 🛠️ Customization

To add more images:

1. Add new images to the folder
2. Update `script.js`:

```javascript
const images = ["bg1.jpg", "bg2.jpg", "bg3.jpg"];
```

---

## ⚠️ Limitations

* Does **not** change Chrome’s top bar (tabs/toolbar)
* Works only on the **new tab page**

---

## 🌿 Future Improvements

* Smooth fade transitions between images
* Time-based theme switching (day/night)
* Add widgets (clock, quotes, productivity tools)

---

## 💻 Built With

* HTML
* CSS
* JavaScript
* Chrome Extension APIs (Manifest V3)

---

## 🤍 Inspiration

Designed to create a calm, cozy browsing environment —
because your workspace should feel as good as it looks.

---

## 📌 Author

Shirayuki ✨

