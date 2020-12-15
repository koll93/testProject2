import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {jqxTreeComponent} from 'jqwidgets-ng/jqxtree';
import {tree} from './tree';
import {RoutService} from '../../shared/services/rout.service';

@Component({
  selector: 'app-tree',
  template: `<jqxTree #myTreeTask [width] = "250" [source] = "records" [height]="'400'" [allowDrop]="false" [allowDrag]="false"
                                        [theme]="'web'" (contextmenu)="false"></jqxTree>`,
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit, AfterViewInit  {
  tree = tree;
  @ViewChild('myTreeTask', {read: ElementRef, static: false}) myTreeElementRef: ElementRef;
  @ViewChild('myTreeTask', {static: false}) myTreeComponent: jqxTreeComponent;
  records: any;

  constructor(private rout: RoutService) {}

  ngOnInit(): void {
    this.getTree();
  }

  ngAfterViewInit(): void {
    this.dblclickOpenItem();
    this.blockContextMenu();
    if (typeof this.myTreeComponent.getItems()[0] !== 'undefined') {
      setTimeout(() => {
        this.myTreeComponent.expandItem(this.myTreeComponent.getItems()[0].element); // раскрытие дерева
      }, 500);
    }
  }

  getTree() {   // Получить дерево c сервера

    const source = {
      datatype: 'json',
      datafields: [
        {name: 'id'},
        {name: 'items', type: 'array', map: 'childTask'},
        {name: 'label', map: 'nameButton'},
        {name: 'icon'},
      ],
      localdata: {childTask: this.tree},
      id: 'id',
    };
    const dataAdapter = new jqx.dataAdapter(source, {autoBind: true});
    this.records = dataAdapter.getRecordsHierarchy('id', 'items',  'data', [{name: 'label'}]);
  }


  dblclickOpenItem() { // Переопределяет dblclick по умолчанию (раскрытие дерева) на открытие пунктов
    this.myTreeElementRef.nativeElement.addEventListener('dblclick', e => {
      e.stopPropagation(); // отключение события по умолчанию

      // @ts-ignore
      if ((this.myTreeComponent.getItems().find(name => name.id === e.target.parentElement.id)) // если щелчок по div
        && (e.target.localName === 'div')) { // если id кнопки присутствует в дереве, то событие происходит
        this.rout.viewTable(e.target.parentElement.id);
      }
      // @ts-ignore
      if ((this.myTreeComponent.getItems().find(name => name.id === e.target.parentElement.parentElement.id)) // если щелчок по иконке
        && (e.target.localName === 'img')) { // если id кнопки присутствует в дереве, то событие происходит
        this.rout.viewTable(e.target.parentElement.parentElement.id);
      }
    }, true);
  }

  blockContextMenu() {
    this.myTreeElementRef.nativeElement.addEventListener('contextmenu', e => {
      e.stopPropagation(); // отключение события по умолчанию
    }, false);
  }
}
