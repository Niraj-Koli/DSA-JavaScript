// Tower of Hanoi //

/* 
    n -> No of plates
    s -> source 
    d -> destination
    h -> helper 
    count -> No of steps
    
*/

function towerOfHanoi(s, d, h, n, count) {
    count++;

    if (n === 1) {
        return count;
    }

    towerOfHanoi(s, h, d, n - 1);

    towerOfHanoi(h, d, s, n - 1);
}
