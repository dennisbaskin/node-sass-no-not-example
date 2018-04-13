# node-sass v4.8.3 missing :not(&)

## To reproduce

```
git clone https://github.com/dennisbaskin/node-sass-no-not-example.git
npm install
npm test
``` 

## Expected output

```
.btn.disabled:not(.btn-default,
.button-default, .btn-default,
.button-default):not(.btn-outline,
.button-outline, .btn-outline,
.button-outline), .btn:disabled:not(.btn-default,
.button-default, .btn-default,
.button-default):not(.btn-outline,
.button-outline, .btn-outline,
.button-outline),
.button.disabled:not(.btn-default,
.button-default, .btn-default,
.button-default):not(.btn-outline,
.button-outline, .btn-outline,
.button-outline),
.button:disabled:not(.btn-default,
.button-default, .btn-default,
.button-default):not(.btn-outline,
.button-outline, .btn-outline,
.button-outline) {
  background: #fefefe !important;
  color: #111111 !important; }
```

## Actual output

```
.btn.disabled, .btn:disabled,
.button.disabled,
.button:disabled {
  background: #fefefe !important;
  color: #111111 !important; }
```