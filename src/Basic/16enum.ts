// Enum枚举类型详细注解
enum Status {
    BOOK = 1,
    WATER,
    BASKETBALL
}

function getSome(status: any) {
    switch (status){
        case Status.BOOK:
            return 'book'
        case Status.WATER:
            return 'water'
        case Status.BASKETBALL:
            return 'basketball'
    }
}

const res = getSome(Status.BASKETBALL)
console.log(`我拿到的是：${res}`);

