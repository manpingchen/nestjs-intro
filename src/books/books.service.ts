import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

type Book = {
  name: string;
  price: number;
};

@Injectable()
export class BooksService {
  books: Book[];

  constructor() {
    this.books = [
      { name: 'Book1', price: 123 },
      { name: 'Book2', price: 234 },
      { name: 'Book3', price: 345 },
    ];
  }

  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    if (id > this.books.length - 1)
      throw new HttpException('No Book Found', HttpStatus.BAD_REQUEST);
    return this.books[id];
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return this.books.splice(id, 1);
  }
}
