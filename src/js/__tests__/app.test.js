import extractSpecialAttacks from '../app.js';

describe('extractSpecialAttacks function', () => {
    test('should extract special attacks with description', () => {
        const character = {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [
                {
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://...',
                    description: 'Двойной выстрел наносит двойной урон'
                },
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...'
                }
            ]
        };

        const expected = [
            {
                id: 8,
                name: 'Двойной выстрел',
                description: 'Двойной выстрел наносит двойной урон',
                icon: 'http://...'
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                description: 'Описание недоступно',
                icon: 'http://...'
            }
        ];

        expect(extractSpecialAttacks(character)).toEqual(expected);
    });

    test('should extract special attacks without description', () => {
        const character = {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [
                {
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://...',
                    description: 'Двойной выстрел наносит двойной урон'
                },
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...'
                }
            ]
        };

        const expected = [
            {
                id: 8,
                name: 'Двойной выстрел',
                description: 'Двойной выстрел наносит двойной урон',
                icon: 'http://...'
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                description: 'Описание недоступно',
                icon: 'http://...'
            }
        ];

        expect(extractSpecialAttacks(character)).toEqual(expected);
    });
});
