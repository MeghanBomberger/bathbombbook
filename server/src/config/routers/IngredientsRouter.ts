import * as express from 'express'

export const ingredientRouter = express.Router()

ingredientRouter.get('/', async (req, res, next) => {
  try {
    res.send({
      materials: [
        {
          id: 1,
          name: 'baking soda',
          uom: 'g',
          qty_instock: 7257,
          restock: false,
          type: 'baseIngredient',
          label_text: 'sodium bicarbonate',
          purchase_units: [
            {
              purchase_unit_id: 1,
              name: "Arm & Hammer Pure Baking Soda 13.5lb",
              unit_of_measure: 'lb',
              package_qty: 13.5,
              price: 7.49,
              listing_url: 'https://www.costco.com/arm-%2526-hammer-pure-baking-soda%2C-13.5-lbs.product.100381528.html',
              supplier_id: 1
            }
          ]
        },
        {
          id: 2,
          name: 'citric acid',
          uom: 'g',
          qty_instock: 10,
          restock: false,
          type: 'baseIngredient',
          label_text: 'citric acid',
          purchase_units: [
            {
              purchase_unit_id: 2,
              name: "Milliard Citric Acid 10lb x 10",
              unit_of_measure: 'lb',
              package_qty: 100,
              price: 134.9,
              listing_url: 'https://www.amazon.com/gp/product/B00GNBHPAS/',
              supplier_id: 2
            },
            {
              purchase_unit_id: 3,
              name: "Milliard Citric Acid 10lb x 1",
              unit_of_measure: 'lb',
              package_qty: 10,
              price: 24.99,
              listing_url: 'https://www.amazon.com/gp/product/B00GNBHPAS/',
              supplier_id: 2
            }
          ]
        }
      ],
      suppliers: [
        {
          id: 1,
          name: "Costco",
          url: "https://www.costco.com/",
          shipping_days: 2
        },
        {
          id: 2,
          name: "Amazon",
          url: "https://www.amazon.com/",
          shipping_days: 7
        }
      ]
    })
  } catch (err) {
    console.error(err)
    res.sendStatus(500).json({
      message: err
    })
    next()
    return
  }
})

