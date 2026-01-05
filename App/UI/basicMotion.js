export function animateSpeed(object, initX, endX, time){
    if (!object.visible) return;


    if (object.position.x < endX) {

        object.position.x = initX * time;
    }

    else if (object.position.x >= endX) {

        object.position.x = initX;
    }

    console.log(object.position.x);


}