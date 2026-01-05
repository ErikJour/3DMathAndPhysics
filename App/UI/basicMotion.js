export function animateSpeed(object, initX, endX, time){
    if (!object.visible) return;


    if (object.position.x < endX) {

        object.position.x = (1 - initX) * time;
    }

    else if (object.position.x === endX) {

    return time;

    }
}