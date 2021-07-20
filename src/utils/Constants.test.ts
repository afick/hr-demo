import React from 'react'
import dayjs from 'dayjs'
import { DEFAULT_DATE_FORMAT, hasStringValue } from './Constants'

describe('Verify constants return correct values', function () {

    it('renders the correct dateformat', () => {
        const dateFormatted = dayjs('1/2/2021').format(DEFAULT_DATE_FORMAT)
        expect(dateFormatted).toBe('2021-01-02')
    })
    describe('Verify hasStringValue return correct boolean', () => {
        expect(hasStringValue(' ')).toBe(false)
        expect(hasStringValue('')).toBe(false)
        expect(hasStringValue('test')).toBe(true)
        expect(hasStringValue(undefined)).toBe(false)
        expect(hasStringValue(null)).toBe(false)
    })

})
