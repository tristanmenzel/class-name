import { cn } from './index'


describe('cn', () => {

  describe('when given a single string arg', () => {
    const res = cn('test')
    it('returns that single string arg',() => {
      expect(res).toBe('test')
    })
  })

  describe('when given two strings', () => {
    const res = cn('one', 'two')
    it('joins them with a space', () => {
      expect(res).toBe('one two')
    })
  })

  describe('when given undefined values', () => {
    const res = cn('one', undefined, 'two', undefined)
    it('the undefined values are omitted', () => {
      expect(res).toBe(('one two'))
    })
  })
  describe('when given false values', () => {
    const res = cn('one', false, 'two', false)
    it('the false values are omitted', () => {
      expect(res).toBe(('one two'))
    })
  })
  describe('when given nested arrays', () => {
    const res = cn('one two', ['three', 'four'], 'five')
    it('the values are flattened and joined with a space', () => {
      expect(res).toBe('one two three four five')
    })
  })
})
