# NYT Dark

Dark mode for nytimes.com on desktop.

The news site already has a dark theme, it's just locked to light. This
extension turns the theme back on and patches the sections it misses (footer,
nav dropdowns, the homepage section grid).

Cooking, Games, Wirecutter, and The Athletic are separate apps without a usable
dark theme, so those get a color-inverting filter instead. Photos are flipped
back so they look normal, but some logos and colors can look a bit off there.

It follows your system appearance, so if your computer is in light mode, NYT
stays light.

## Install

1. [Download the zip](https://github.com/danaimone/nyt-dark/archive/refs/heads/main.zip) and unzip it.
2. Go to `chrome://extensions` in your browser.
3. Turn on **Developer mode**.
4. Click **Load unpacked** and pick the `nyt-dark-main` folder.
5. Reload nytimes.com.

Keep the folder around, since the browser loads the extension from it.

I've only tested this in Dia on a Mac. It should work in other Chromium
browsers, but I haven't tried them.

## Updating

Download the zip again, replace the folder, and click the reload icon on
**NYT Dark** in `chrome://extensions`.

## Permissions

It only runs on `www.nytimes.com` and `cooking.nytimes.com`, and it doesn't
collect or send anything. The whole thing is `dark.js`, `dark.css`, and
`filter.css`, so it's quick to read if you'd like to check.

## If something looks wrong

This relies on NYT's internal class names, so a redesign could break it. Some
pages I haven't tested (the puzzles themselves, recipes, interactive graphics)
may have rough spots. Issues with a screenshot are welcome.

Not affiliated with The New York Times.
