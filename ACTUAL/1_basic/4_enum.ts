/**
 * Enum
 */

/**
 * API 요청을 한다
 * 상태는 4가지 상태
 *
 * DONE - 요청완료 상태
 * LOADING - 로딩상태
 * ERROR - 에러상태
 * INITIAL - 초기상태
 */

function runWork() {
    let status = 'INITIAL';

    try {
        status = 'LOADING';
        // 작업을 한다

        status = 'DONE';
    } catch (error) {
        status = 'ERROR';
    } finally {
        return status;
    }
}
console.log(runWork() === 'DONE');

const doneState = 'DONE';
const loadingState = 'LOADING';
const errorState = 'ERROR';
const initialState = 'INITIAL';

function runWork2() {
    let status = initialState;

    try {
        status = loadingState;
        // 작업을 한다

        status = doneState;
    } catch (error) {
        status = errorState;
    } finally {
        return status;
    }
}

console.log(runWork2() === doneState);

enum State {
    DONE = 'DONE',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    INITIAL = 'INITIAL',
}

function runWork3() {
    let status = State.INITIAL;

    try {
        status = State.LOADING;
        // 작업을 한다

        status = State.DONE;
    } catch (error) {
        status = State.ERROR;
    } finally {
        return status;
    }
}

console.log(runWork3() === State.DONE);
console.log(runWork3());
