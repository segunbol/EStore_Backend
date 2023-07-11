import { Joi } from "./joi";

export const createCategorySchema = {
    body: Joi.object({
        store_id: Joi.objectId().required(),
        name: Joi.objectId().required(),
        image: Joi.string().required()
    })
}

export const getCategorySchema = {
    query: Joi.object({
        category: Joi.string().required()
    })
}

export const getCategoriesSchema = {
    query: Joi.object({
      categories: Joi.array().items(Joi.string()).required()
    })
  };

export const deleteCategorySchema = {
params: Joi.object({
    categoryId: Joi.string().required()
})
};
  
export const deleteAllCategoriesSchema = {
query: Joi.object({
    confirm: Joi.boolean().valid(true).required()
})
};