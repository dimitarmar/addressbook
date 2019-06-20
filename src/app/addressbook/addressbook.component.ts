import {AddressItem} from '../shared/model/AddressItem';
import {Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Guid} from 'guid-typescript';
import {AddressbookService} from './addressbook.service';

@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.css']
})

export class AddressbookComponent implements OnInit {

   addresslist: AddressItem[];
   addresslistBackState: { [s: string]: AddressItem; } = {};
   selectedRow: AddressItem;

    constructor(private http: HttpClient, private addressbookService: AddressbookService) { }

    ngOnInit() {

      //  read JSON
      this.addressbookService.getAddressListModel().subscribe(data => {
        this.addresslist = data as AddressItem[];
        this.addresslist.forEach((dataItem) => {
            dataItem.id = Guid.create().toString();
        });
      });
    }

    onRowEditInit(addressItem: AddressItem) {
        this.addresslistBackState[addressItem.id] = {...addressItem};
    }

    onRowEditCancel(addressItem: AddressItem, index: number) {
        this.addresslist[index] = this.addresslistBackState[addressItem.id];
        delete this.addresslistBackState[addressItem.id];
    }

    addNewBtnClickHandler() {
        const newItem: AddressItem = new AddressItem();
        newItem.id = Guid.create().toString();
        newItem.firstname = 'New Name Added';
        newItem.lastname = 'New Last Name Added';
        newItem.country = 'New Country Added';
        newItem.address = 'New Address Added';
        this.addresslist.push(newItem) ;
        this.selectedRow = newItem;
    }

    onRowDelete(addressItem: AddressItem, index: number) {
        this.addresslist.splice(index, 1);
    }

}

