#TimelineJS3 API

Timeline 3 exposes the events and methods listed below.

Note that these methods make a distinction between an `event_index` and a `slide_index`.  An `event_index` is an index into the sorted array of `events` in the timeline data object.  A `slide_index` is index of the slide that appears in the rendered timeline.  

A `title` has no `event_index` and has `slide_index` 0.  

If you have a `title`, the first event has `event_index` 0 and `slide_index` 1.

If you do not have a `title`, the first event has `event_index` 0 and `slide_index` 0.


### Events

```javascript

// Create new Timeline object
var timeline = new VCO.Timeline(...);

// Set event handlers
// event_name = string, name of the event, e.g. "change"
// data = JavaScript object containing event-specific properties listed below
timeline.on(event_name, function(data) {
    // handle event
});
```

 `back_to_start` _when user clicks control to return to beginning of timeline_
 
 `change` _when the current slide changes_

* uniqueid: string, id of the new current slide

`color_change` _when background of current slide changes_

* uniqueid: string, id of the new current slide

`dataloaded` _after data has been loaded_

`hash_updated` _when the hashbookmack in the url bar is updated_

* uniqueid:  string, id of the new current slide
* hashbookmark: string, the hash

`loaded` _after story slider and time navigator have been loaded_

* scale: "javascript" or "cosmological", the type of date scale
* slides: array, the processed slide data

`zoom_in` _when user zooms in the time navigator_

`zoom_out` _when user zooms out the time navigator_

* zoom_level: integer, current zoom level

`added` _after slide has been added_

`removed` _after slide has been removed_

* uniqueid: string, the id of the modified slide


### Navigation

`goTo(<int slide_index>)` _go to slide at index_

`goToId(<string id>)` _go to slide with id_

`goToNext()` _go to next slide_

`goToPrev()` _go to previous slide_

`goToStart()` _go to first slide_

`goToEnd()` _go to last slide_

### Manipulation

`remove(<int event_index>)` _remove event by index_

`removeId(<string id>)` _remove event by id_

`add(<object data>)` _add event with data (see event data format below)_

### Data Access

`getData(<int slide_index>)` _get data for slide by index_

`getDataId(<string id>)` _get data for slide by id_

`getSlide(<int slide_index>)` _get VCO.Slide object by index_

`getSlideId(<string id>)` _get VCO.Slide object by id_


####Event data format
```javascript
{
    "start_date": {
        "year":			<string>,
        "month":		<string>,
        "day": 			<string>,
        "hour": 		<string>,
        "minute": 		<string>,
        "second": 		<string>,
        "millisecond": 	<string>,
        "format": 		<string>,
        "display_text": <string>
    },
    "end_date": {                   // optional
        "year":			<string>,
        "month":		<string>,
        "day": 			<string>,
        "hour": 		<string>,
        "minute": 		<string>,
        "second": 		<string>,
        "millisecond": 	<string>,
        "format": 		<string>,
        "display_text": <string>
    },
    "location": {                   // optional
        "icon":         <string>,   // icon url
        "lat":          <float>,   
        "lon":          <float>,
        "line":         <boolean>,
        "name":         <string>,
        "zoom":         <int>
    },
    "media": {
        "caption":      <string>,
        "credit":       <string>,
        "url":          <string>
    },
    "text": {
        "headline":     <string>,
        "text":         <string>
    },
    "uniqueid":         <string>    // optional
};
```
