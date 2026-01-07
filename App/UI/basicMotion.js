export function animateSpeed(object, initX, endX, time, clicked){
    let frame = 0;
    if (!object.visible) return;
    if (!clicked) {
        return
    }
    {
    if (object.position.x < endX) {

        object.position.x = (1 - initX) * time;
        console.log(time)

        } else if (object.position.x === endX) {


        }
    }
}