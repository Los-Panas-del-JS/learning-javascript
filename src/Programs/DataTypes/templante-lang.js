/**
 * DEFINITION
 * Engenieering team needs create a new template language it MUST have following requirements:
 * 1. Variables.
 * 2. Operations (lower, upper, trim, reverse).
 * 3. Multi-operation pipes.
 *
 * Pre processed template:
 * <my-component>
 *    <image source="{{ %component.imageSource% }}"></image>
 *    <text-card>{{ %component.description% | reverse (can be: lower, upper, trim, reverse)}}</text-card>
 *    <text-card>{{ %component.description% | trim | reverse | upper | lower }}</text-card>
 * </my-component>
 *
 * Processed template:
 * <my-component>
 *    <image source="https://my-cdn.site.com/cat-devil.jpeg"></image>
 *    <text-card>noitpircsed a si siht (original text: this is a description)</text-card>
 * </my-component>
 *
 * --------------------
 * IMPLEMENTATION
 *
 * const processor = new LanguageProcessor();
 *
 * const template = `
 * <my-component>
 *    <image source="{{ %component.imageSource% }}"></image>
 *    <text-card>{{ %component.description% | trim | reverse | upper | lower }}</text-card>
 * </my-component>`;
 *
 * const processedTemplate = processor.run(
 *    template,
 *    {
 *      component: {
 *        imageSource: 'https://my-cdn.site.com/cat-devil.jpeg',
 *        description: 'this is a description',
 *      },
 *    }
 * );
 *
 * console.log(processedTemplate);
 */
