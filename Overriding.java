package com.OverRiding;

class Shapes {
	public double perimeter() {
		return 0.0;
	}
}

class Rectangle extends Shapes{
	double length;
	double width;
	
	public Rectangle (double length , double width) {
		this.length=length;
		this.width=width;
		
		
		
	}
	
	public double perimeter() {
		return 2*(length+width);
	}
	
	
}

class Square extends Shapes {
	double length;
	
	public Square(double length) {
		this.length=length;
	}
	
	public double perimeter() {
		return 4*length;
	}
}

class Circle extends Shapes{
	double rad;
	
	public Circle (double rad) {
		this.rad=rad;
	}
	public double perimeter() {
		return 2*Math.PI*rad;
	}
}


public class Perimeter {

	public static void main(String[] args) {
		double len = 2.5;
		double wgt =2;
		double r=2;
		
		Rectangle rectangle = new Rectangle(len,wgt);
		Square square = new Square (len);
		Circle circle = new Circle (r);
		
		
		
		System.out.println(rectangle.perimeter());
		System.out.println(square.perimeter());
		System.out.println(circle.perimeter());

	}

}
