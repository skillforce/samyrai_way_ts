import Paginator from './Paginator';
import {create} from 'react-test-renderer';


describe('Paginator component tests', () => {
    test('pages count is 11 but should be showed only 10 ', () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} onPageChanged={() => {
        }} portionSize={10}/>)
        const root = component.root;
        let spans = root.findAllByType('span');
        expect(spans.length).toBe(10);
    })
    test('if current page more then 10 btn btn next should be present ', () => {
        const component = create(<Paginator totalItemsCount={1000} pageSize={10} currentPage={12} onPageChanged={() => {
        }} portionSize={10}/>)
        const root = component.root;
        let btn = root.findAllByType('button');
        expect(btn.length).toBe(1);
    })
})