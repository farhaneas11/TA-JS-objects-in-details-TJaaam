class Square{
    constructor(width,hieght){
        this.width = width;
        this.hieght = hieght;

        calcarea(area){
            area = width * hieght;
            return area;
        }

        getarea(){
            return this.area;
        }
    }
}