# form-state

Small state transitions for form validation and change tracking.

Run `node test.js` from this folder.

## required

Require a nonblank string. A number is not silently coerced into a title.

## integerInRange

Both bounds are inclusive. Convert and validate string input before calling.

## changedKeys

Compare shallow property values. Missing and explicitly undefined properties compare equally.

## validateTitle

Return the first validation message, or null. Length is measured in Unicode code points after trimming.
