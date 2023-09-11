# i-run-code-from-the-internet


## Node.js example

A demo of the security provided by LavaMoat.  
The `demo` branch contains a sequence of commits with various versions of a "useful" package turning malicious.

---

Demo setup

```
git switch demo
git checkout 1
node sink/index.mjs &
PS1='>'
```

Demo playthrough

```
gitnext
npm start
npm test
```

## Webpack example

Pre-release demo of the LAvaMoat plugin for Webpack.
The `frontend` branch contains an example app which uses a malicious package. 
Build it with and without the plugin and compare what happens.